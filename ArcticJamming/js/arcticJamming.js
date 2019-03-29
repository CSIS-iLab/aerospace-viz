"use strict";

var map,
  now = null,
  startDates = [],
  endDates = [],
  scenario = "Zapad",
  maxRadius = 375,
  maxMargin = maxRadius / 2,
  dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  };

var scenarioData = {
  Zapad: {
    center: [70.32613725493573, 25.576171875],
    zoom: 6,
    description:
      '<span class="scenario-description-name">Zapad</span> (Fall 2017) was a joint Russia-Belarus military exercise.'
  },
  "Trident Juncture": {
    center: [69.7485511291223, 23.389892578125004],
    zoom: 6,
    description:
      '<span class="scenario-description-name">Trident Juncture</span> (Fall 2018) was a NATO military exercise.'
  },
  Clockwork: {
    center: [67.20403234340081, 20.017089843750004],
    zoom: 5,
    description:
      '<span class="scenario-description-name">Clockwork</span> (Spring 2019) was a UK military exercise.'
  }
};

var labels = {
  "Barents Sea": { type: "water", center: [72, 34] },
  Norway: { type: "land", center: [69.1312712296365, 23.57666015625] },
  Sweden: { type: "land", center: [67.7926408447319, 20.830078125000004] },
  Finland: { type: "land", center: [68.39918004344189, 26.059570312500004] },
  Russia: { type: "land", center: [68.64055504059381, 33.53027343750001] }
};

var filters = [
  function(feature, layers) {
    var bool = false;

    if (
      feature.properties.scenario
        .toLowerCase()
        .indexOf(scenario.toLowerCase()) > -1
    ) {
      var s = feature.properties.date_start.split("/").map(function(value) {
        return convertType(value);
      });
      var e = feature.properties.date_end.split("/").map(function(value) {
        return convertType(value);
      });
      var startDate = new Date(s[2], s[0] - 1, s[1]);
      var endDate = new Date(e[2], e[0] - 1, e[1]);
      startDates.push(startDate);
      endDates.push(endDate);
      feature.properties.startDate = startDate;
      feature.properties.endDate = endDate;
      bool = true;
    }

    return bool;
  }
];
var timeline = {
  scenario: scenario,
  playing: false,
  timer: null,
  transitionDuration: 1000,
  end: null,
  start: null,
  step: 24 * 60 * 60 * 1000,
  updateCurrentLaunches: function updateCurrentLaunches(launches) {
    this.currentLaunchesEl.innerHTML = launches;
  },
  setupTimeline: function setupTimeline(_ref) {
    var start = _ref.start,
      end = _ref.end,
      now = _ref.now,
      onChange = _ref.onChange;
    this.end = end;
    this.start = start;
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
    this.el.noUiSlider.set(start);
    this.setupBtnControls();
    this.el.noUiSlider.on("update", onChange);
    this.el.querySelector("[data-value='" + start, "']").innerHTML = new Date(
      start
    ).toLocaleDateString("en-US", dateOptions);
    this.el.querySelector("[data-value='" + end, "']").innerHTML = new Date(
      end
    ).toLocaleDateString("en-US", dateOptions);
  },
  setupBtnControls: function setupBtnControls() {
    this.btnControls.addEventListener("click", function() {
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
  stopTimeline: function stopTimeline() {
    clearInterval(timeline.timer);
    timeline.playing = false;
    timeline.btnControls.classList.remove("pause-btn");
    timeline.btnControls.classList.add("play-btn");
  }
};
makeMap({
  mapID: "arctic",
  center: scenarioData[timeline.scenario].center,
  zoom: scenarioData[timeline.scenario].zoom,
  attribution:
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace Security</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
  table: "jamming_activities_in_the_arctic_circle",
  "api key": "Im_n2elHbHRallDYDff3Eg",
  program: "Aerospace Security",
  website: "https://aerospace.csis.org",
  title: "GPS Jamming in the Arctic Circle",
  description:
    "Some airports in the Arctic Circle have reported GPS signal outages during military exercises in the region. Explore by selecting a military exercise below. Click a site on the map to learn more.",
  cluster: false,
  "mapbox style": "cjtt0jqiq01c51fs1r2sb4hl4",
  "ocean color": "#b7c7d1",
  filters: filters,
  onEachFeature: {
    click: function click() {
      this.closePopup();
      var popupContent = map.formatPopupContent(this.feature, map);
      this.bindPopup(popupContent);
      document.querySelector(".leaflet-popup-close-button").style.opacity = "1";
    },
    mouseover: function mouseover() {
      this.bindPopup(
        '<div class="tooltip">\n      <div class="tooltip-heading">' +
          this.feature.properties.name_hover,
        "</div></div>"
      );
      this.openPopup();
    }
  },
  addEvent: groupsLoaded,
  formatToolbox: formatToolbox,
  formatPopupContent: formatCustomPopupContent,
  geoJsonOptions: makeCustomGeoJsonOptions,
  zoomSlider: false,
  minZoom: 4,
  maxZoom: 8,
  maxBounds: [
    //south west
    [40, -20], //north east
    [80, 60]
  ],
  widgets: [
    {
      field: "type",
      type: "color",
      keys: [
        {
          value: "Jammed Airspace",
          color: "#f9bc65"
        },
        {
          value: "Russian Military Exercise",
          color: "#d66e42"
        },
        {
          value: "NATO Military Exercise",
          color: "#196c95"
        }
      ]
    },
    {
      field: "icon",
      type: "form",
      keys: [
        {
          value: "dot",
          form: "icon"
        },
        {
          value: "base",
          form: "icon",
          icon: "icons/base.svg"
        },
        {
          value: "ship",
          form: "icon",
          icon: "icons/ship.svg"
        },
        {
          value: "plane",
          form: "icon",
          icon: "icons/plane.svg"
        },
        {
          value: "helicopter",
          form: "icon",
          icon: "icons/helicopter.svg"
        }
      ]
    }
  ]
});
map = Map.all[0];

L.control
  .scale({
    position: "bottomleft"
  })
  .addTo(map.map);

Object.keys(labels).forEach(function(text) {
  new L.Marker(labels[text].center, {
    icon: new L.DivIcon({
      iconAnchor: [40, 20],
      className: labels[text].type,
      html: "<div>" + text + "</div>"
    })
  }).addTo(map.map);
});

function setIconSize() {
  var zoomLevel = map.map.getZoom();

  var iconElements = Array.from(
    document.querySelectorAll(".leaflet-marker-icon")
  );

  iconElements.forEach(function(icon) {
    icon.style.width = zoomLevel * 4 + "px";
    icon.style.height = zoomLevel * 4 + "px";
  });

  var jamElements = Array.from(
    document.querySelectorAll('[class*="jammed-airspace"]')
  );

  jamElements.forEach(function(icon) {
    var size = Math.min(1, zoomLevel - map.minZoom) * 0.5 * maxRadius;
    icon.style.width = size + "px";

    icon.style.height = size + "px";
    icon.style.marginLeft = size + "px";

    icon.style.marginLeft = "-" + size / 2 + "px";
    icon.style.marginTop = "-" + size / 2 + "px";
  });
}

map.map.on("zoomend", setIconSize);

function formatToolbox(box) {
  var boxContent = `
    <div class="separator"></div>
    <section id="scenario">
    <div class="instruction">
      <p>Select a military exercise</p>
      <p></p>
    </div>
  ${Object.keys(scenarioData)
    .map(function(key) {
      return `<button ${
        scenario === key ? 'class="active"' : ""
      }>${key}</button>`;
    })
    .join(" ")}
  <p class="scenario-description">${
    scenarioData[timeline.scenario].description
  }</p>
    <div>
    </section>
      <div class="separator"></div>
    <section id="time">
    <div class="indicator">
      <p>Signal loss on <span class="date"></span></p>
      <p><span></span></p>
    </div>
    <div class="timeline">
    <div class="timeline-controls">
      <button class="timeline-btn play-btn"></button>
    </div>
    <div class="timeline-container">
      <div class="timeline-bar"></div>
    </div>
    </div>
    </section>
    <!--<p>Click on a point for incident details</p>-->
      <div class="separator"></div>
    <section>
    <ul id="key">
      <li class="label"><span class="colorKey" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjZjliYzY1Ii8+PC9zdmc+')"></span><span class="itemText" style="transform: translateY(13.3333%);">GPS Signal Loss</span></li>

      <li class="label"><span class="colorKey" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjMTk2Yzk1Ii8+PC9zdmc+')"></span><span class="itemText" style="transform: translateY(13.3333%);">NATO  Activity</span></li>

      <li class="label"><span class="colorKey" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjZDY2ZTQyIi8+PC9zdmc+')"></span><span class="itemText" style="transform: translateY(13.3333%);">Russian Military Activity</span></li>
      </ul>
    </section>
    <div class="hidden"></div>
      `;

  box.innerHTML = boxContent;
  scenario = document.querySelector("button.active").innerText;
  timeline.el = document.querySelector(".timeline-bar");
  timeline.btnControls = document.querySelector(".timeline-btn");
  document
    .querySelector("#scenario")
    .addEventListener("click", handleSceneClick);
}

function groupsLoaded() {
  timeline.end = new Date(
    Math.max.apply(
      null,
      endDates.map(function(e) {
        return new Date(e);
      })
    )
  ).getTime();
  timeline.start = new Date(
    Math.min.apply(
      null,
      startDates.map(function(e) {
        return new Date(e);
      })
    )
  ).getTime();

  if (
    !isNaN(timeline.start) &&
    !isNaN(timeline.end) &&
    !timeline.el.noUiSlider
  ) {
    now = timeline.start;
    Array.from(document.querySelectorAll(".date")).forEach(function(dateEl) {
      dateEl.innerText = new Date(now).toLocaleDateString("en-US", dateOptions);
    });
    var timelineOptions = {
      start: timeline.start,
      end: timeline.end,
      now: now,
      onChange: function onChange() {
        now = this.get();
        Array.from(document.querySelectorAll(".date")).forEach(function(
          dateEl
        ) {
          dateEl.innerText = new Date(now).toLocaleDateString(
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
      }
    };
    timeline.setupTimeline(timelineOptions);
  }

  var first = document.querySelector('[data-start="' + now, '"]');
  if (first) first.style.display = "block";
}

function makeCustomGeoJsonOptions() {
  var colorKeyWidget = map.widgets.find(function(w) {
    return w.type === "color";
  });
  var formKeyWidget = map.widgets.find(function(w) {
    return w.type === "form";
  });

  function filter(feature) {
    var activeFilters = map.filters.length ? map.filters : filters;
    return activeFilters
      .map(function(f) {
        return f(feature);
      })
      .every(function(f) {
        return f !== false;
      });
  }

  function onEachFeature(feature, layer) {
    handleFeatureEvents(feature, layer, map);
  }

  var backgroundOptions = {
    filter: filter,
    onEachFeature: function onEachFeature() {
      return false;
    },
    pointToLayer: function pointToLayer(feature, latlng) {
      return styleCustomPoint(feature, latlng, map, colorKeyWidget);
    }
  };
  var foregroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: function pointToLayer(feature, latlng) {
      return stylePoint(feature, latlng, map, formKeyWidget);
    }
  };
  return [backgroundOptions, foregroundOptions];
}

function styleCustomPoint(feature, latlng, map, colorKeyWidget) {
  var colorKeyWidget = map.widgets.find(function(w) {
    return w.type === "color";
  });
  var key = colorKeyWidget.keys.find(function(k) {
    return (
      k.value.toLowerCase() ===
      feature.properties[colorKeyWidget.field].toLowerCase()
    );
  });
  var styleOptions = {
    key: key,
    color: key.color,
    map: map,
    feature: feature
  };
  var scenario = feature.properties.scenario.toLowerCase().replace(/ /g, "-");
  var value = feature.properties.type.toLowerCase().replace(/ /g, "-");
  var s = feature.properties.date_start.split("/").map(function(value) {
    return convertType(value);
  });
  var e = feature.properties.date_end.split("/").map(function(value) {
    return convertType(value);
  });
  var startDate = new Date(s[2], s[0] - 1, s[1]);
  var endDate = new Date(e[2], e[0] - 1, e[1]);
  var icon = L.divIcon({
    iconAnchor: [0, 0],
    popupAnchor: [0, 10],
    html:
      '<div class="animated_icon__' +
      scenario +
      "--" +
      value +
      '" data-start="' +
      startDate.getTime() +
      '" data-end="' +
      endDate.getTime() +
      '"></div>'
  });
  var marker = L.marker(latlng, {
    icon: icon
  });
  marker.on("add", function() {
    var animatedIcons = Array.from(
      document.querySelectorAll('[class*="jammed-airspace"]')
    );

    if (animatedIcons.length) {
      animatedIcons.forEach(function(icon) {
        icon.style.width = maxRadius + "px";
        icon.style.height = maxRadius + "px";
        icon.style.marginLeft = "-" + maxMargin + "px";
        icon.style.marginTop = "-" + maxMargin + "px";
        icon.parentElement.style.zIndex = "-1";
      });
    }
  });
  return marker;
}

function formatCustomPopupContent(feature, map) {
  var formattedStartDate = feature.properties.startDate.toLocaleDateString(
    "en-US",
    dateOptions
  );
  var formattedEndDate = feature.properties.endDate.toLocaleDateString(
    "en-US",
    dateOptions
  );
  var date =
    formattedStartDate +
    (feature.properties.startDate.getDay() !==
      feature.properties.endDate.getDay() && feature.properties.end_true
      ? " to " + formattedEndDate
      : "");
  var sources = Object.keys(feature.properties)
    .filter(function(key) {
      return key.indexOf("click") > -1 && feature.properties[key].trim();
    })
    .map(function(key) {
      return feature.properties[key].replace(
        "</a>",
        " " +
          externalLink +
          "</a>".replace("<a href", '<a target="_blank" href')
      );
    })
    .join("<br>");
  return (
    '<div class="tooltip"><div class="tooltip-heading">' +
      feature.properties.name_hover +
      '</div><div class="tooltip-label">' +
      date +
      '</div><div class="tooltip-label">' +
      feature.properties.details_hover,
    '</div><div class="tooltip-link">' + +sources + "</div></div>"
  );
}

function handleSceneClick(e) {
  if (e.target.classList.contains("active")) return;

  if (timeline.playing == true) {
    timeline.stopTimeline();
    timeline.el.noUiSlider.set(timeline.start);
  }

  var active = document.querySelector("button.active");

  if (e.target.tagName === "BUTTON") {
    active.classList.remove("active");
    e.target.classList.add("active");
  }

  timeline.scenario = document.querySelector("button.active").textContent;
  map.map.flyTo(
    scenarioData[timeline.scenario].center,
    scenarioData[timeline.scenario].zoom,
    {
      animate: true,
      duration: 0.5
    }
  );
  Array.from(document.querySelectorAll(".scenario-description")).forEach(
    function(sceneEl) {
      sceneEl.innerHTML = scenarioData[timeline.scenario].description;
    }
  );
  startDates = [];
  endDates = [];

  map.filters[0] = function(feature, layers) {
    var bool = false;

    if (
      feature.properties.scenario
        .toLowerCase()
        .indexOf(timeline.scenario.toLowerCase()) > -1
    ) {
      var s = feature.properties.date_start.split("/").map(function(value) {
        return convertType(value);
      });
      var e = feature.properties.date_end.split("/").map(function(value) {
        return convertType(value);
      });
      var startDate = new Date(s[2], s[0] - 1, s[1]);
      var endDate = new Date(e[2], e[0] - 1, e[1]);
      startDates.push(startDate);
      endDates.push(endDate);
      feature.properties.startDate = startDate;
      feature.properties.endDate = endDate;
      bool = true;
    }

    return bool;
  };

  map.removeGroups();
  makeGroups(map);
  timeline.end = new Date(
    Math.max.apply(
      null,
      endDates.map(function(e) {
        return new Date(e);
      })
    )
  ).getTime();
  timeline.start = new Date(
    Math.min.apply(
      null,
      startDates.map(function(e) {
        return new Date(e);
      })
    )
  ).getTime();

  if (!isNaN(timeline.start) && !isNaN(timeline.end)) {
    var newOptions = {
      start: timeline.start,
      range: {
        min: timeline.start,
        max: timeline.end
      },
      pips: {
        mode: "range",
        density: (100 / (timeline.end - timeline.start)) * timeline.step
      }
    };
    timeline.el.noUiSlider.updateOptions(newOptions, true);
    timeline.el.querySelector(
      "[data-value='" + timeline.start,
      "']"
    ).innerHTML = new Date(timeline.start).toLocaleDateString(
      "en-US",
      dateOptions
    );
    timeline.el.querySelector(
      "[data-value='" + timeline.end,
      "']"
    ).innerHTML = new Date(timeline.end).toLocaleDateString(
      "en-US",
      dateOptions
    );
  }
}
