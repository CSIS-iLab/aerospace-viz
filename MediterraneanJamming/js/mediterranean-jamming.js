var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/ck7kn54kz0n551ium4z5qzliv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
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
    featureOverColumns: [
      "location_as_reported",
      "date",
    ]
  }
);

client.addLayer(jammedPlacesLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const popup = L.popup({ closeButton: true });

jammedPlacesLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

let dates = []
let s
let e

fetch('https://csis.carto.com/api/v2/sql?api_key=3W5HgCXM23QVjB8bFW413w&q=SELECT * FROM copy_of_gps_jamming_in_the_mediterranean_sea')
  .then((resp) => resp.json())
  .then((response) => {
    response.rows.forEach((row, i) => {
      let d = row.date.split('/').map(function (value) {
        return convertType(value)
      })
      let date = new Date(d[2], d[0] - 1, d[1])
      dates.push(date.getTime())

    })
    dates.sort(function (a, b) { return a - b })
    len = dates.length
    s = dates[0]
    e = dates[len - 1]


    noUiSlider.create(slider, {
      start: [s],
      range: {
        'min': s,
        'max': e,
      },

      step: 24 * 60 * 60 * 1000,
      behaviour: 'tap-drag',
    })

    console.log(s)

    var dateValues = [
      document.getElementById('event-start'),
      document.getElementById('event-end')
    ];

    slider.noUiSlider.on('update', function (values, handle) {
      dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });

    // Create a list of day and month names.
    var weekdays = [
      "Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday",
      "Saturday"
    ];

    var months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    // Append a suffix to dates.
    // Example: 23 => 23rd, 1 => 1st.
    function nth(d) {
      if (d > 3 && d < 21) return 'th';
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

    // Create a string representation of the date.
    function formatDate(date) {
      return weekdays[date.getDay()] + ", " +
        date.getDate() + nth(date.getDate()) + " " +
        months[date.getMonth()] + " " +
        date.getFullYear();
    }
  })









var filters = [
  function (feature, layers) {
    var bool = false

    var s = feature.properties.date_start.split('/').map(function (value) {
      return convertType(value)
    })
    var e = feature.properties.date_end.split('/').map(function (value) {
      return convertType(value)
    })
    var startDate = new Date(s[2], s[0] - 1, s[1])
    var endDate = new Date(e[2], e[0] - 1, e[1])
    feature.properties.startDate = startDate
    feature.properties.endDate = endDate
    bool = true

    return bool
  }
]


function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    var content = "<div>";

    var keys = [
      "location_as_reported",
      "date",
    ];

    content += `
    <div class="popupHeaderStyle"> 
    ${data.location_as_reported}
    </div> 
    <div class="popupEntryStyle"> 
    ${data.date}
    </div>
    `
    popup.setContent("" + content);
    popup.openOn(map);
  }
  console.log(event)
}

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace</a>, Leaflet contributors'
  )
  .addTo(map);


// Create a new date from a string, return as a timestamp.
function timestamp(str) {
  return new Date(str).getTime();
}

let slider = document.getElementById("controls")




let timeline = {
  playing: false,
  timer: null,
  transitionDuration: 1000,
  end: null,
  start: null,
  step: 24 * 60 * 60 * 1000,
  setupTimeline: function setupTimeline(_ref) {
    var start = _ref.start,
      end = _ref.end,
      now = _ref.now,
      onChange = _ref.onChange
    this.end = end
    this.start = start

    noUiSlider.create(this.el, {
      start: this.start,
      connect: true,
      behaviour: 'tap-drag',
      step: this.step,
      range: {
        min: this.start,
        max: this.end
      },
      format: {
        from: function from(v) {
          return parseInt(v, 10)
        },
        to: function to(v) {
          return parseInt(v, 10)
        }
      },
      pips: {
        mode: 'range',
        density: (100 / (this.end - this.start)) * this.step
      }
    })
    this.el.noUiSlider.set(start)
    this.setupBtnControls()
    this.el.noUiSlider.on('update', onChange)
    this.el.querySelector("[data-value='" + start, "']").innerHTML = new Date(
      start
    ).toLocaleDateString('en-US', dateOptions)
    this.el.querySelector("[data-value='" + end, "']").innerHTML = new Date(
      end
    ).toLocaleDateString('en-US', dateOptions)
  },
  setupBtnControls: function setupBtnControls() {
    this.btnControls.addEventListener('click', function () {
      if (now == timeline.end) {
        timeline.el.noUiSlider.set(timeline.start)
      }

      if (timeline.playing == true) {
        timeline.stopTimeline()
        return
      }

      timeline.timer = setInterval(function () {
        now += timeline.el.noUiSlider.options.step
        timeline.el.noUiSlider.set(now)
      }, timeline.transitionDuration)
      this.classList.remove('play-btn')
      this.classList.add('pause-btn')
      timeline.playing = true
    })
  },
  stopTimeline: function stopTimeline() {
    clearInterval(timeline.timer)
    timeline.playing = false
    timeline.btnControls.classList.remove('pause-btn')
    timeline.btnControls.classList.add('play-btn')
  }
}


// var checks = Array.from(
//   document.querySelectorAll(".type_of_asset ul input")
// ).map(function (checkbox) {
//   return checkbox.name;
// });

// var filter_checks = new carto.filter.Category("type_of_asset", {
//   notIn: checks
// });

// document
//   .querySelector(".type_of_asset ul")
//   .addEventListener("click", function (e) {
//     var checkbox = e.target.type === "checkbox" ? e.target : null;

//     if (checkbox) {
//       var checked = Array.from(
//         document.querySelectorAll(".type_of_asset ul input:checked")
//       ).map(function (checkbox) {
//         return checkbox.name;
//       });

//       var notChecked = checks.filter(function (name) {
//         return checked.indexOf(name) < 0;
//       });

//       var filter_checked = new carto.filter.Category("type_of_asset", {
//         in: checked
//       });

//       var filter_notChecked = new carto.filter.Category("type_of_asset", {
//         notIn: notChecked
//       });

//       var filters =
//         checkbox.name === "OTHERS" && checkbox.checked
//           ? [filter_checks, filter_checked]
//           : checkbox.name === "OTHERS" && !checkbox.checked
//             ? [filter_checked]
//             : [filter_notChecked];

//       jammedPlacesSource.getFilters().forEach(function (f) {
//         jammedPlacesSource.removeFilter(f);
//       });

//       jammedPlacesSource.addFilter(new carto.filter.OR(filters));
//     }
//   });

function convertType(value) {
  var v = Number(value)
  return !isNaN(v)
    ? v
    : value.toLowerCase() === 'undefined'
      ? undefined
      : value.toLowerCase() === 'null'
        ? null
        : value.toLowerCase() === 'true'
          ? true
          : value.toLowerCase() === 'false'
            ? false
            : value
}