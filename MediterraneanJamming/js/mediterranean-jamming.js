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
  // addEvent: groupsLoaded,
  formatToolbox: formatToolbox
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
      let d = row.date.split("/").map(function(value) {
        return convertType(value);
      });
      let date = new Date(d[2], d[0] - 1, d[1]);
      dates.push(date.getTime());
    });
    dates.sort(function(a, b) {
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
  playing: false,
  timer: null,
  transitionDuration: 1000,
  end: e,
  start: s,
  step: 24 * 60 * 60 * 1000,
  onChange: function onChange() {
    now = this.get();
    Array.from(document.querySelectorAll(".date")).forEach(function(dateEl) {
      dateEl.innerText = formatDate(new Date(now)).toLocaleDateString(
        "en-US",
        dateOptions
      );
    });
    var jams = Array.from(
      document.querySelectorAll('[class*="jammed-airspace"]')
    );
    jams.forEach(function(jam) {
      var start = parseInt(jam.dataset.start, 10);
      var end = parseInt(jam.dataset.end, 10);

      if (now >= start && now <= end) {
        jam.style.display = "block";
      } else {
        jam.style.display = "none";
      }
    });

    if (now == timeline.end) {
      timeline.stopTimeline();
      setTimeout(function() {
        timeline.el.noUiSlider.set(timeline.start);
      }, timeline.transitionDuration);
      jams.forEach(function(jam) {
        jam.style.display = "none";
      });
    }
  },
  setupTimeline: function({ start, end }) {
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
        density: (100 / (this.end - this.start)) * this.step
      }
    });
    this.el.noUiSlider.set(this.start);
    this.setupBtnControls();
    this.el.noUiSlider.on("update", this.onChange);
    // this.el.querySelector(
    //   "[data-value='" + this.start,
    //   "']"
    // ).innerHTML = formatDate(new Date(this.start)).toLocaleDateString(
    //   "en-US",
    //   dateOptions
    // );
    // this.el.querySelector(
    //   "[data-value='" + this.end,
    //   "']"
    // ).innerHTML = formatDate(new Date(this.end)).toLocaleDateString(
    //   "en-US",
    //   dateOptions
    // );
  },
  setupBtnControls: function() {
    this.controlBtn.addEventListener("click", function() {
      if (now == timeline.end) {
        timeline.el.noUiSlider.set(timeline.start);
      }

      if (timeline.playing == true) {
        timeline.stopTimeline();
        return;
      }

      timeline.timer = setInterval(function() {
        now += timeline.el.noUiSlider.options.step;
        timeline.el.noUiSlider.set(now);
      }, timeline.transitionDuration);
      this.classList.remove("play-btn");
      this.classList.add("pause-btn");
      timeline.playing = true;
    });
  },
  stopTimeline: function() {
    clearInterval(timeline.timer);
    timeline.playing = false;
    timeline.controlBtn.classList.remove("pause-btn");
    timeline.controlBtn.classList.add("play-btn");
  }
};

function formatToolbox(box) {
  var boxContent =
    '<div class="separator"></div><section id="scenario"><div class="instruction"><p>Select a military exercise</p><p></p></div>' +
    Object.keys(scenarioData)
      .map(function(key) {
        return (
          "<button" +
          (scenario === key ? ' class="active"' : "") +
          ">" +
          key +
          "</button>"
        );
      })
      .join(" ") +
    '<p class="scenario-description">' +
    scenarioData[timeline.scenario].description +
    '</p> <div> </section> <div class="separator"></div> <section id="time"> <div class="indicator"> <p>Signal loss on <span class="date"></span></p> <p><span></span></p> </div> <div class="timeline"> <div class="timeline-controls"> <button class="timeline-btn play-btn"></button> </div> <div class="timeline-container"> <div class="timeline-bar"></div> </div> </div> </section> <!--<p>Click on a point for incident details</p>--> <div class="separator"></div> <section> <ul id="key"> <li class="label"><span class="colorKey" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjZjliYzY1Ii8+PC9zdmc+\')"></span><span class="itemText" style="transform: translateY(13.3333%);">GPS Signal Loss</span></li> <li class="label"><span class="colorKey" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjMTk2Yzk1Ii8+PC9zdmc+\')"></span><span class="itemText" style="transform: translateY(13.3333%);">NATO Activity</span></li> <li class="label"><span class="colorKey" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjZDY2ZTQyIi8+PC9zdmc+\')"></span><span class="itemText" style="transform: translateY(13.3333%);">Russian Military Activity</span></li> </ul> </section> <div class="hidden"></div>';

  box.innerHTML = boxContent;
  scenario = document.querySelector("button.active").innerText;
  timeline.el = document.querySelector(".timeline-bar");
  timeline.btnControls = document.querySelector(".timeline-btn");

  var m = this;

  document
    .querySelector("#scenario")
    .addEventListener("click", e => handleSceneClick(e, m));
}

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

// let slider = document.getElementById("controls")

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

// Create a string representation of the date.
function formatDate(date) {
  // Create a list of day and month names.
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Append a suffix to dates.
  // Example: 23 => 23rd, 1 => 1st.
  function nth(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    weekdays[date.getDay()] +
    ", " +
    date.getDate() +
    nth(date.getDate()) +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear()
  );
}
