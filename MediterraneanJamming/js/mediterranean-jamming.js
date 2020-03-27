const apiKey = "3W5HgCXM23QVjB8bFW413w";
const username = "csis";
const datatable = "copy_of_gps_jamming_in_the_mediterranean_sea";

/* Load Map & Data Layer */
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
  attributionControl: false
});

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace</a>, Leaflet contributors'
  )
  .addTo(map);

/* Create Timeline */
let dates = [];
let jammingIcons = [];

fetch(
  `https://${username}.carto.com/api/v2/sql?api_key=${apiKey}&q=SELECT * FROM ${datatable}`
)
  .then(resp => resp.json())
  .then(response => {
    response.rows.forEach((row, i) => {
      const date = new Date(row.date);
      row.timestamp = date.getTime();
      dates.push(row.timestamp);

      row.formattedDate = `${date.getMonth() +
        1}/${date.getDate()}/${date.getFullYear()}`;
    });
    dates.sort();
    len = dates.length;

    createMarkers(response.rows);

    timeline.setupTimeline({ start: dates[0], end: dates[len - 1] });
  });

/* Create points as Leaflet markers so they are selectable & filterable with JS */
function createMarkers(markers) {
  for (let i = 0; i < markers.length; i++) {
    const {
      lat,
      long,
      location_as_reported,
      timestamp,
      formattedDate
    } = markers[i];

    L.marker([lat, long], {
      icon: new L.divIcon({
        className: "jamming-icon-container",
        html: `<div class="jamming-icon" data-timestamp="${timestamp}"></div>`
      })
    }).addTo(map).bindPopup(`<div class="popupHeaderStyle">
    ${location_as_reported}
    </div>`);
  }

  jammingIcons = Array.from(document.querySelectorAll(".jamming-icon"));
}

const timeline = {
  el: document.querySelector(".timeline-bar"),
  controlBtn: document.getElementById("timeline-btn"),
  currentDateEl: document.querySelector(".timeline-current-date"),
  playing: false,
  timer: null,
  transitionDuration: 1000,
  end: null,
  start: null,
  step: 24 * 60 * 60 * 1000,
  updateCurrentDate(date) {
    this.currentDateEl.innerHTML = `${this.formatDate(date)}`;
  },
  onChange: function onChange() {
    now = this.get();
    timeline.updateCurrentDate(now);

    jammingIcons.forEach(icon => {
      const iconDate = +icon.getAttribute("data-timestamp");
      icon.classList.toggle("isActive", iconDate === now);
    });

    if (now == timeline.end) {
      timeline.stopTimeline();
      setTimeout(function () {
        timeline.el.noUiSlider.set(timeline.start);
      }, timeline.transitionDuration);
    }
  },
  formatDate(date) {
    date = new Date(date);
    date = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  setupTimeline: function ({ start, end }) {
    this.start = start;
    this.end = end;

    this.setupBtnControls();

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
    this.el.noUiSlider.on("update", this.onChange);
    this.el.noUiSlider.on("slide", function (values, handle) {
      let tempDate = new Date(values[handle]);
      tempDate = new Date(
        tempDate.getUTCFullYear(),
        tempDate.getUTCMonth(),
        tempDate.getUTCDate()
      ).getTime();

      timeline.el.noUiSlider.set(tempDate);
    });

    this.el.querySelector(
      "[data-value='" + this.start,
      "']"
    ).innerHTML = this.formatDate(start);

    this.el.querySelector(
      "[data-value='" + this.end,
      "']"
    ).innerHTML = this.formatDate(end);
  },
  setupBtnControls: function () {
    this.controlBtn.addEventListener("click", function () {
      let currentDate = now;
      if (now == timeline.end) {
        timeline.el.noUiSlider.set(timeline.start);
      }

      if (timeline.playing == true) {
        timeline.stopTimeline();
        return;
      }

      let ints = []

      jammingIcons.forEach(icon => {
        const iconDate = +icon.getAttribute("data-timestamp");
        ints.push(iconDate)
      })

      let i = 0

      function jamTimer() {

        if (i >= ints.length) {
          i = 0
        }

        let currentDate = now
        now = ints[i]
        timeline.el.noUiSlider.set(now)
        i++
      }

      timeline.timer = setInterval(jamTimer, timeline.transitionDuration)

      // timeline.timer = setInterval(function () {
      //   let currentDate = now;
      //   now += timeline.el.noUiSlider.options.step;
      //   timeline.el.noUiSlider.set(now);
      //   console.log(now)
      // }, timeline.transitionDuration);
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
