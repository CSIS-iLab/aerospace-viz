let allData = [];

Highcharts.data({
  googleSpreadsheetKey: "1FGdaphIbRjDpXsOdU3omWGRpH5DTImmzWW-H43lLOms",
  googleSpreadsheetWorksheet: 1,
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    columns.splice(0, 2);
    columns.forEach((row) => {
      const launchVehicle = row[0];
      let firstLaunchYear = row[1];
      let successIncludingSimilarVehicles = row[3];
      let fy21Cost = row[4];

      allData.push({
        x: firstLaunchYear,
        y: fy21Cost,
        z: successIncludingSimilarVehicles,
      });
    });
    renderChart(allData);
  },
});

function renderChart(allData) {
  Highcharts.chart("hcContainer", {
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
    },

    legend: {
      enabled: false,
    },

    title: {
      text:
        "Comparing Cost of Launch to Low-Earth Orbit for Successful Orbital Launch Vehicles",
    },

    subtitle: {
      text:
        "Bubble sizes correspond to the vehicle's number of successful launches",
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: "Year of First Successful Orbital Launch",
      },
    },

    yAxis: {
      title: {
        text: "$K / kg (FY21 dollars)",
      },
    },
    tooltip: {
      useHTML: true,
      headerFormat: "<table>",
      footerFormat: "</table>",
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
        type: "bubble",
        data: allData,
      },
    ],
  });
}
