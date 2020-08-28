const classInfo = {
  Heavy: {
    color: "#196C95",
    lendIndex: 1,
  },
  Medium: {
    color: "#5DB6D0",
    legendIndex: 2,
  },
  Small: {
    color: "#F9BC65",
    legendIndex: 3,
  },
};

let allData = {
  fy21: {
    title: "FY21 Dollars",
    values: [],
  },
  thenYear: {
    title: "Then-Year Dollars",
    values: [],
  },
};

let searchItemsSet = new Set();
let searchItemsArray = [];
let currentChartData = [];

Highcharts.data({
  googleSpreadsheetKey: "1FGdaphIbRjDpXsOdU3omWGRpH5DTImmzWW-H43lLOms",
  googleSpreadsheetWorksheet: 1,
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    columns.splice(0, 2);
    for (let i = 0; i < columns.length; i++) {
      const row = columns[i];

      // This will skip the current loop iteration and move to the next one
      if (row[2] == null) {
        continue;
      }

      const launchVehicle = row[0];
      let firstLaunchYear = row[1];
      let successfulLaunches = row[2];
      let successIncludingSimilarVehicles = row[3];
      let fy21CostPerKg = row[4];
      let fy21TotalLaunchCost = row[5];
      let thenYearCostPerKg = row[6];
      let thenYearLaunchCost = row[7];
      let launchClass = row[8];
      let country = row[9];
      let similarVehicles = row[10];
      let source = row[11];
      let tags = row[12];

      if (tags) {
      tags.split(",").forEach((tag) => searchItemsSet.add(tag.trim()));
      }

      const data = {
        x: firstLaunchYear,
        z: successIncludingSimilarVehicles,
        launchVehicle,
        successfulLaunches,
        launchClass,
        country,
        similarVehicles,
        source,
        color: classInfo[launchClass].color,
        legendIndex: classInfo[launchClass].legendIndex,
        tags,
      };

      allData.fy21.values.push({
        ...data,
        y: fy21CostPerKg,
        launchCost: fy21TotalLaunchCost,
      });

      allData.thenYear.values.push({
        ...data,
        y: thenYearCostPerKg,
        launchCost: thenYearLaunchCost,
      });
    }

    searchItemsArray = [...searchItemsSet];

    setupSearch(searchItemsArray);

    renderChart(allData.fy21);
  },
});

function renderChart(data) {
  let chart = Highcharts.chart("hcContainer", {
    chart: {
      events: {
        click: function() {
          instructions.classList.add("is-visible")
          details.classList.remove("is-visible"); 
        }
      },
      resetZoomButton: {
        theme: {
          fill: '#b5bdc1',
          style: {
            fontFamily: 'Abel',
            fontSize: '12px',
            fontSize: '.75rem',
            color: '#000',  
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            transition: 'all .3s ease-in-out'
          },
          states: {
            hover: {
              fill: '#c6ced2',
              style: {
                transition: 'all .3s ease-in-out'
              }
            }
          }
        }
      },
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
      backgroundColor: "rgba(0,0,0,0)",
      width: null,
      height: 490,
      marginTop: 27
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: true,
      text: 'CSIS Aerospace Security Project'
    },
    title: {
      text: null
    },
    legend: {
      x: 35
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        text: "Year of First Successful Orbital Launch",
      },
    },

    yAxis: {
      title: {
        text: "$ / kg (" + data.title + ")",
      },
      type: "logarithmic",
      tickInterval: 1,
      tickPositions: [500, 1000, 2000, 5000, 20000, 50000, 100000, 500000, 5000000, 5000000].map((v) => Math.log10(v)),
      labels: {
        formatter: function () {
          if (this.value >= 1000000000) {
            return "$" + this.value / 1000000000 + "B";
          } else if (this.value >= 1000000) {
            return "$" + (this.value / 1000000) + "M";
          } else if (this.value >= 1000) {
            return "$" + (this.value / 1000) + "K";
          } else {
            return this.value;
          }
        }
      },
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        let launchVehicle = this.point.launchVehicle;
        let firstSuccessfulLaunch = this.point.x;
        let successfulLaunches = Highcharts.numberFormat(this.point.successfulLaunches, 0);
        let successIncludingSimilarVehicles = this.point.z;
        let fy21CostPerKg = Highcharts.numberFormat(this.point.y, 0);
        let launchCost = this.point.launchCost;
        let launchClass = this.point.launchClass;
        let country = this.point.country;
        let similarVehicles = this.point.similarVehicles;
        let source = this.point.source;

        let similarVehiclesRow = "";
        if (similarVehicles) {
          similarVehiclesRow = `
            Similar launch vehicles with successful launches include <span class="tooltip__value">${similarVehicles}</span>.
          `;
        }

        const html = `
          <h2 class="tooltip__heading">${launchVehicle}</h2>
          <ul>
            <li>Country: <span class="tooltip__value" id="li">${country}</span></li>
            <li>Payload Cost to LEO: <span class="tooltip__value" id="li">${fy21CostPerKg}</span> $/kg</li>
            <li>Class: <span class="tooltip__value" id="li">${launchClass}</span></li>
          </ul>
          <p>The <span class="tooltip__value">${launchVehicle}</span> launch vehicle has completed <span class="tooltip__value">${successfulLaunches}</span>
          successful launches since <span class="tooltip__value">${firstSuccessfulLaunch}</span> at approximately 
          <span class="tooltip__value">$${launchCost} million</span> per launch. ${similarVehiclesRow}</p>
          <p class="tooltip__source">Source: ${source}</p>
        `;
        document.getElementById('details').innerHTML = html;
        return false;
      },
      followPointer: true,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
        point: {
          events: {
            mouseOver: function() {
              const details = document.getElementById("details")
              const instructions = document.getElementById("instructions")
              var chart = this.series.chart;

              if (chart) {
                instructions.classList.remove("is-visible")
                details.classList.add("is-visible");                
              }
            }
          }
        },
      },
    },
    series: [
      {
        name: "Heavy",
        type: "bubble",
        data: data.values.filter((data) => data.launchClass == "Heavy"),
      },
      {
        name: "Medium",
        type: "bubble",
        data: data.values.filter((data) => data.launchClass == "Medium"),
      },
      {
        name: "Small",
        type: "bubble",
        data: data.values.filter((data) => data.launchClass == "Small"),
      },
    ],
  });

  currentChartData = [
    ...chart.series[0].data,
    ...chart.series[1].data,
    ...chart.series[2].data,
  ];
}

const select = document.getElementById("dropdown");
select.addEventListener("change", function () {
  console.log(this);
  let chart = Highcharts.chart("hcContainer", {});
  chart.destroy();
  renderChart(allData[this.value]);
});

// *******Autocomplete.js*********
function setupSearch(data) {
  const input = document.querySelector("#autoComplete");

  const autoCompletejs = new autoComplete({
    data: {
      src: data,
      cache: true,
    },
    sort: (a, b) => {
      if (a.match < b.match) return -1;
      if (a.match > b.match) return 1;
      return 0;
    },
    placeHolder: "Vehicle, Country, Spaceport...",
    selector: "#autoComplete",
    threshold: 0,
    debounce: 0,
    searchEngine: "strict",
    highlight: true,
    maxResults: 5,
    resultsList: {
      render: true,
      container: (source) => {
        source.setAttribute("id", "autoComplete_list");
      },
      destination: document.querySelector("#autoComplete"),
      position: "afterend",
      element: "ul",
    },
    resultItem: {
      content: (data, source) => {
        source.innerHTML = data.match;
      },
      element: "li",
    },
    noResults: () => {
      const result = document.createElement("li");
      result.setAttribute("class", "no_result");
      result.setAttribute("tabindex", "1");
      result.innerHTML = "No Results";
      document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: (feedback) => {
      const selection = feedback.selection.value;

      for (let i = 0; i < currentChartData.length; i++) {
        const item = currentChartData[i];

        if (item.tags) {
          if (item.tags.includes(selection)) {
            item.graphic.attr({ opacity: 1, "stroke-width": 2 });
          } else {
            item.graphic.attr({ opacity: 0.2, "stroke-width": 1 });
          }
        }
      }

      // Clear Input
      input.value = selection;
    },
  });

  const resetSearch = document.getElementById("resetSearch");
  resetSearch.addEventListener("click", function () {
    for (let i = 0; i < currentChartData.length; i++) {
      const item = currentChartData[i];
      item.graphic.attr({ opacity: 1, "stroke-width": 1 });
    }
    input.value = null;
  });

  // Toggle event for search input
  // showing & hidding results list onfocus / blur
  ["focus", "blur"].forEach(function(eventType) {
    const resultsList = document.querySelector("#autoComplete_list");

    input.addEventListener(eventType, function() {
      // Hide results list & show other elemennts
      if (eventType === "blur") {
        resultsList.style.display = "none";
      } else if (eventType === "focus") {
        // Show results list & hide other elemennts
        resultsList.style.display = "block";
      }
    });
  });
}