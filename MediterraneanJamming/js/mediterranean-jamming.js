var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/ck7kn54kz0n551ium4z5qzliv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [35.943, 23.647],
  zoom: 5,
  maxZoom: 12,
  scrollWheelZoom: true,
  minZoom: 3,
  zoomControl: true,
  layers: [basemap],
  attributionControl: false,
  // formatToolbox: formatToolbox
});

const client = new carto.Client({
  apiKey: "3W5HgCXM23QVjB8bFW413w",
  username: "csis"
});

const jammedPlacesSource = new carto.source.SQL(
  "SELECT * FROM copy_of_gps_jamming_in_the_mediterranean_sea"
);

const jammedPlacesStyle = new carto.style.CartoCSS(`
        #layer {
          marker-width: 16.5;
          marker-fill: #f9bc65;
          marker-fill-opacity: 0.9;
          marker-allow-overlap: true;
          marker-line-width: 0;
          marker-line-color: #FFFFFF;
          marker-line-opacity: 1;
        }
      `);

const jammedPlacesLayer = new carto.layer.Layer(
  jammedPlacesSource,
  jammedPlacesStyle,
  {
    featureOverColumns: ["location_as_reported", "date"]
  }
);

client.addLayer(jammedPlacesLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);


const popup = L.popup({ closeButton: true });

jammedPlacesLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

let dates = [];
let s;
let e;
let stepVal = 24 * 60 * 60 * 1000;

fetch(
  "https://csis.carto.com/api/v2/sql?api_key=3W5HgCXM23QVjB8bFW413w&q=SELECT * FROM copy_of_gps_jamming_in_the_mediterranean_sea"
)
  .then(resp => resp.json())
  .then(response => {
    response.rows.forEach((row, i) => {
      let d = row.date.split("/").map(function (value) {
        return convertType(value);
      });
      let date = new Date(d[2], d[0] - 1, d[1]);
      dates.push(date.getTime());
    });
    dates.sort(function (a, b) {
      return a - b;
    });
    len = dates.length;

    console.log(response);
    console.log(dates);

    timeline.setupTimeline({ start: dates[0], end: dates[len - 1] });
  });

var timeline = {
  el: document.querySelector(".timeline-bar"),
  controlBtn: document.getElementById("timeline-controls"),
  currentDateEl: document.querySelector('.timeline-current-date'),
  playing: false,
  timer: null,
  transitionDuration: 300,
  end: e,
  start: s,
  step: 24 * 60 * 60 * 1000,
  updateCurrentDate(date) {
    this.currentDateEl.innerHTML = `${this.formatDate(date)}`
  },
  onChange: function onChange() {
    now = this.get();
    timeline.updateCurrentDate(now)
    console.log(dates)
    console.log(now)
    Array.from(document.querySelectorAll(".date")).forEach(function (dateEl) {
      dateEl.innerText = formatDate(now)
    });
    var jams = Array.from(
      document.querySelectorAll('[class*="jammed-airspace"]')
    );
    dates.forEach(function (jam) {
      // var start = parseInt(jam.dataset.start, 10);
      // var end = parseInt(jam.dataset.end, 10);
      if (now == jam) {
        jam.style.display = "block";
      } else {
        jam.style.display = "none";
      }
    });

    if (now == timeline.end) {
      timeline.stopTimeline();
      setTimeout(function () {
        timeline.el.noUiSlider.set(timeline.start);
      }, timeline.transitionDuration);
      jams.forEach(function (jam) {
        jam.style.display = "none";
      });
    }
  },
  formatDate(date) {
    date = new Date(date)
    date = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    )
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  },
  setupTimeline: function ({ start, end }) {
    console.log(this);
    this.start = start;
    this.end = end;
    noUiSlider.create(this.el, {
      start: this.start,
      connect: true,
      behaviour: "tap-drag",
      step: this.step,
      range: {
        min: this.start,
        max: this.end
      },
      format: {
        from: function from(v) {
          return parseInt(v, 10);
        },
        to: function to(v) {
          return parseInt(v, 10);
        }
      },
      pips: {
        mode: "range",
        density: 30
      }
    });
    this.el.noUiSlider.set(this.start);
    this.setupBtnControls();
    this.el.noUiSlider.on("update", this.onChange);
    this.el.noUiSlider.on('slide', function (values, handle) {
      let tempDate = new Date(values[handle])
      tempDate = new Date(
        tempDate.getUTCFullYear(),
        tempDate.getUTCMonth(),
        tempDate.getUTCDate()
      ).getTime()
      // console.log(values[handle])
      // console.log(tempDate)
      timeline.el.noUiSlider.set(tempDate)
    })
    this.el.querySelector(
      "[data-value='" + this.start,
      "']"
    ).innerHTML = this.formatDate(start)
    this.el.querySelector(
      "[data-value='" + this.end,
      "']"
    ).innerHTML = this.formatDate(end)
  },
  setupBtnControls: function () {
    this.controlBtn.addEventListener("click", function () {
      let currentDate = now
      if (now == timeline.end) {
        timeline.el.noUiSlider.set(timeline.start);
      }

      if (timeline.playing == true) {
        timeline.stopTimeline();
        return;
      }

      timeline.timer = setInterval(function () {
        let currentDate = now
        now += timeline.el.noUiSlider.options.step;
        timeline.el.noUiSlider.set(now);
      }, timeline.transitionDuration);
      this.classList.remove("play-btn");
      this.classList.add("pause-btn");
      timeline.playing = true;
    });
  },
  stopTimeline: function () {
    clearInterval(timeline.timer);
    timeline.playing = false;
    timeline.controlBtn.classList.remove("pause-btn");
    timeline.controlBtn.classList.add("play-btn");
  }
};



function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    var content = "<div>";

    var keys = ["location_as_reported", "date"];

    content += `
    <div class="popupHeaderStyle">
    ${data.location_as_reported}
    </div>
    <div class="popupEntryStyle">
    ${data.date}
    </div>
    `;
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace</a>, Leaflet contributors'
  )
  .addTo(map);

// let marker = L.marker(latlng).addTo(map)




function convertType(value) {
  var v = Number(value);
  return !isNaN(v)
    ? v
    : value.toLowerCase() === "undefined"
      ? undefined
      : value.toLowerCase() === "null"
        ? null
        : value.toLowerCase() === "true"
          ? true
          : value.toLowerCase() === "false"
            ? false
            : value;
}
