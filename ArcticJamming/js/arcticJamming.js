var now = null,
  startDates = [],
  endDates = [],
  scenario = "Zapad",
  dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  };
descriptions = {
  Zapad:
    '<span class="scenario-description-name">Zapad</span> (Fall 2017) was a joint Russia-Belarus military exercise.',
  "Trident Juncture":
    '<span class="scenario-description-name">Trident Juncture</span> (Fall 2018) was a NATO military exercise.',
  Clockwork:
    '<span class="scenario-description-name">Clockwork</span> (Spring 2019) was a UK military exercise.'
};
filters = [
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

var framesPerSecond = 120,
  initialRadius = 0,
  radius = initialRadius,
  maxRadius = 500,
  initialMargin = -5,
  margin = initialMargin,
  maxMargin = maxRadius / 2,
  initialOpacity = 0.5,
  opacity = initialOpacity,
  blipTimer;

var timeline = {
  scenario: scenario,
  playing: false,
  timer: null,
  transitionDuration: 1000,
  end: null,
  start: null,
  step: 24 * 60 * 60 * 1000,
  updateCurrentLaunches(launches) {
    this.currentLaunchesEl.innerHTML = launches;
  },
  setupTimeline({ start, end, now, onChange }) {
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
        from: v => parseInt(v, 10),
        to: v => parseInt(v, 10)
      },
      pips: {
        mode: "range",
        density: (100 / (this.end - this.start)) * this.step
      }
    });

    this.el.noUiSlider.set(start);

    this.setupBtnControls();

    this.el.noUiSlider.on("update", onChange);

    this.el.querySelector(`[data-value='${start}']`).innerHTML = new Date(
      start
    ).toLocaleDateString("en-US", dateOptions);

    this.el.querySelector(`[data-value='${end}']`).innerHTML = new Date(
      end
    ).toLocaleDateString("en-US", dateOptions);
  },
  setupBtnControls() {
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

  stopTimeline() {
    clearInterval(timeline.timer);
    timeline.playing = false;
    timeline.btnControls.classList.remove("pause-btn");
    timeline.btnControls.classList.add("play-btn");
  }
};

makeMap({
  mapID: "arctic",
  zoom: 5,
  center: [67, 23],
  attribution:
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace Security</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
  table: "jamming_activities_in_the_arctic_circle",
  "api key": "Im_n2elHbHRallDYDff3Eg",
  program: "CSIS Aerospace Security",
  website: "https://aerospace.csis.org",
  title: "GPS Jamming in the Arctic Circle",
  description:
    "Some airports in the Arctic Circle have reported GPS signal outages during military exercises in the region. Explore by selecting a military exercise below. Click a site on the map to learn more.",
  cluster: false,
  "mapbox style": "cjiw0cu845ai12sry7ddmwska",
  "ocean color": "#b7c7d1",
  filters: filters,
  onEachFeature: {
    click: function(feature, layer, map) {
      handleFeatureEvents(feature, layer, map);
    }
    // mousedown: function(feature, layer, map) {},
    // mouseenter: function(feature, layer, map) {}
  },
  addEvent: function() {
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
        dateEl.innerText = new Date(now).toLocaleDateString(
          "en-US",
          dateOptions
        );
      });

      var timelineOptions = {
        start: timeline.start,
        end: timeline.end,
        now: now,
        onChange: function() {
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
            document.querySelectorAll(`[class*="jammed-airspace"]`)
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

    var first = document.querySelector(`[data-start="${now}"]`);
    if (first) first.style.display = "block";
  },
  formatToolbox: function(box) {
    var map = Map.all[0];
    var boxContent = `


    <div class="separator"></div>
    <section id="scenario">
    <div class="instruction">
      <p>Select a military exercise</p>
      <p></p>
    </div>

${Object.keys(descriptions)
      .map(function(key) {
        return `<button ${
          scenario === key ? 'class="active"' : ""
        }>${key}</button>`;
      })
      .join(" ")}

    <p class="scenario-description">${descriptions[timeline.scenario]}</p>
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
    <section id="key">
      <div class="label""><span class="colorKey" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjZDY2ZTQyIi8+PC9zdmc+" )=""></span><span class="itemText" style="transform: translateY(13.3333%);">Jammed Airspace</span></div>
      <div class="label""><span class="colorKey" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI1IiBmaWxsPSIjMTk2Yzk1Ii8+PC9zdmc+" )=""></span><span class="itemText" style="transform: translateY(13.3333%);">Military Exercise</span></div>

    </section>
      `;

    box.innerHTML = boxContent;

    scenario = document.querySelector("button.active").innerText;

    timeline.el = document.querySelector(".timeline-bar");
    timeline.btnControls = document.querySelector(".timeline-btn");

    document
      .querySelector("#scenario")
      .addEventListener("click", handleSceneClick);
  },
  formatPopupContent: formatCustomPopupContent,
  geoJsonOptions: makeCustomGeoJsonOptions,
  widgets: [
    {
      field: "type",
      type: "color",
      grouping: "scenario",
      keys: [
        {
          value: "Jammed Airspace",
          color: "#d66e42"
        },
        {
          value: "Military Exercise",
          color: "#196c95 "
        }
      ]
    }
  ]
});

function makeCustomGeoJsonOptions() {
  var map = Map.all[0];
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

  // function onEachFeature(feature, layer) {
  //   handleFeatureEvents(feature, layer, map);
  // }

  var backgroundOptions = {
    filter: filter,
    // onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
      return styleCustomPoint(feature, latlng, map, colorKeyWidget);
    }
  };
  var foregroundOptions = {
    filter: filter,
    // onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
      return stylePoint(feature, latlng, map, colorKeyWidget);
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
    html: `<div class="animated_icon__${scenario}--${value}" data-start="${startDate.getTime()}" data-end="${endDate.getTime()}"></div>`
  });

  var marker = L.marker(latlng, {
    icon: icon
  });

  marker.on("add", function() {
    window.animateMarker(0);
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
    feature.properties.endDate.getDay()
      ? " to " + formattedEndDate
      : "");

  var sources = Object.keys(feature.properties)
    .filter(function(key) {
      return key.indexOf("click") > -1 && feature.properties[key].trim();
    })
    .map(function(key) {
      return feature.properties[key].replace(
        "</a>",
        " " + externalLink + "</a>"
      );
    })
    .join("<br>");

  return `<div class="tooltip">
  <div class="tooltip-heading">${feature.properties.name_hover}</div>
  <div class="tooltip-label">${date}</div>
  <div class="tooltip-label">${feature.properties.details_hover}</div>
  <div class="tooltip-link">${sources}</div>
  </div>`;
}

function animateMarker(timestamp) {
  var animatedIcons = Array.from(
    document.querySelectorAll('[class*="jammed-airspace"]')
  );
  if (animatedIcons.length) {
    if (blipTimer) clearTimeout(blipTimer);

    blipTimer = setTimeout(function() {
      requestAnimationFrame(animateMarker);

      radius += (maxRadius - radius) / framesPerSecond;
      opacity -= 0.9 / framesPerSecond;
      opacity = Math.max(0, opacity);
      margin -= (maxMargin + margin) / framesPerSecond;

      animatedIcons.forEach(function(icon) {
        icon.style.width = `${radius}px`;
        icon.style.height = `${radius}px`;
        icon.style.marginLeft = `${margin}px`;
        icon.style.marginTop = `${margin}px`;
        icon.style.opacity = opacity;
      });

      if (opacity <= 0) {
        radius = initialRadius;
        opacity = initialOpacity;
        margin = initialMargin;
      }
    }, 500 / framesPerSecond);
  }
}

function handleSceneClick(e) {
  var map = Map.all[0];
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

  Array.from(document.querySelectorAll(".scenario-description")).forEach(
    function(sceneEl) {
      sceneEl.innerHTML = descriptions[timeline.scenario];
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
      `[data-value='${timeline.start}']`
    ).innerHTML = new Date(timeline.start).toLocaleDateString(
      "en-US",
      dateOptions
    );

    timeline.el.querySelector(
      `[data-value='${timeline.end}']`
    ).innerHTML = new Date(timeline.end).toLocaleDateString(
      "en-US",
      dateOptions
    );
  }
}
