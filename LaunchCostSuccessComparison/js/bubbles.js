const classInfo = {
  Heavy: {
    color: "#196C95",
    lendIndex: 1,
  },
  Medium: {
    color: "#4F9793",
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

      tags.split(",").forEach((tag) => searchItemsSet.add(tag.trim()));

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
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
      backgroundColor: "rgba(0,0,0,0)",
    },
    credits: {
      enabled: true,
      text: "CSIS Aerospace Security Project",
    },
    title: {
      text:
        "Comparing Cost of Launch to Low-Earth Orbit for Successful Orbital Launch Vehicles",
      margin: 70,
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        text: "Year of First Successful Orbital Launch",
      },
    },

    yAxis: [
      {
        title: {
          text: "$K / kg (" + allData.title + ")",
        },
        type: "logarithmic",
      },
    ],
    tooltip: {
      useHTML: true,
      formatter: function () {
        let launchVehicle = this.point.launchVehicle;
        let firstSuccessfulLaunch = this.point.x;
        let successfulLaunches = this.point.successfulLaunches;
        let successIncludingSimilarVehicles = this.point.z;
        let fy21CostPerKg = this.point.y;
        let launchCost = this.point.launchCost;
        let launchClass = this.point.launchClass;
        let country = this.point.country;
        let similarVehicles = this.point.similarVehicles;
        let source = this.point.source;

        let similarVehiclesRow = "";

        if (similarVehicles) {
          similarVehiclesRow = `
            Similar launch vehicles with successful launches include <span style="font-family: 'Arial'; font-size: 14px; text-decoration: underline; text-decoration-color: #D66E42">${similarVehicles}</span>.
          `;
        }

        const html = `
          <span style="font-size: 20px; width: 500px; font-family: 'Abel'"><b>${launchVehicle}</b></span>
          <ul style="font-family: 'Arial'; font-size: 14px;">
            <li>Country: ${country}</li>
            <li>Payload Cost ($/kg): ${launchCost}</li>
            <li>Class: ${launchClass}</li>
          </ul>
          <span style="font-family: 'Arial'; font-size: 14px;">The
          <span style="font-family: 'Arial'; text-decoration: underline;  text-decoration-color: #D66E42; font-size: 14px;">${launchVehicle}</span> 
          launch vehicle has completed
          <span style="font-family: 'Arial'; text-decoration: underline; text-decoration-color: #D66E42"; font-size: 14px;>${successfulLaunches}</span>
          successful launches since
          <span style="font-family: 'Arial'; text-decoration: underline; text-decoration-color: #D66E42; font-size: 14px;"> ${firstSuccessfulLaunch}</span>
          at approximately
          <span style="font-family: 'Arial'; text-decoration: underline; text-decoration-color: #D66E42; font-size: 14px;">${fy21CostPerKg} per launch.</span> 
          <span style="font-family: 'Arial'; font-size: 14px;">${similarVehiclesRow}</span><br><br>
          <span style="font-size: 10px; font-family: 'Arial'">${source}</span>
        `;
        $("#tooltip").html(html);
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
    placeHolder: "Search for a Launch Vehicle or Country",
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

        if (item.tags.includes(selection)) {
          item.graphic.attr({ opacity: 1, "stroke-width": 2 });
        } else {
          item.graphic.attr({ opacity: 0.2, "stroke-width": 1 });
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
}
