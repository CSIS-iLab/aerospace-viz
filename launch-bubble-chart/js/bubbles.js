let fy21Data = [];
let thenYearData = [];
let allData = [fy21Data, thenYearData];
let datasets = ["FY21 Dollars", "Then-Year Dollars"]

Highcharts.data({
  googleSpreadsheetKey: "1FGdaphIbRjDpXsOdU3omWGRpH5DTImmzWW-H43lLOms",
  googleSpreadsheetWorksheet: 1,
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    columns.splice(0, 2);
    columns.forEach((row) => {
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

      

      if (successfulLaunches != null) {
      fy21Data.push({
        x: firstLaunchYear,
        y: fy21CostPerKg,
        z: successIncludingSimilarVehicles,
        fy21TotalLaunchCost: fy21TotalLaunchCost,
        launchVehicle: launchVehicle,
        successfulLaunches: successfulLaunches,
        launchClass: launchClass,
        country: country,
        similarVehicles: similarVehicles,
        source: source,
        yAxisTitle: "$K / kg (FY21 Dollars)"
      });

      thenYearData.push({
        x: firstLaunchYear,
        y: thenYearCostPerKg,
        z: successIncludingSimilarVehicles,
        thenYearLaunchCost: thenYearLaunchCost,
        launchVehicle: launchVehicle,
        successfulLaunches: successfulLaunches,
        launchClass: launchClass,
        country: country,
        similarVehicles: similarVehicles,
        source: source,
        yAxisTitle: "$K / kg (Then-Year Dollars)"
      });
    }
    });
    renderChart(allData[0], datasets[0]);
  },
});

function renderChart(fy21Data, dataset) {
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

    yAxis: [{
      title: {
        text: "$K / kg (" + dataset + ")",
      },
    }],
    tooltip: {
      useHTML: true,
      formatter: function() {

        let launchVehicle = this.point.launchVehicle
        let firstSuccessfulLaunch = this.point.x
        let successfulLaunches = this.point.successfulLaunches
        let successIncludingSimilarVehicles = this.point.z
        let fy21CostPerKg = this.point.y
        let fy21TotalLaunchCost = this.point.fy21TotalLaunchCost
        let launchClass = this.point.launchClass
        let country = this.point.country
        let similarVehicles = this.point.similarVehicles
        let source = this.point.source

        if (similarVehicles == null) {
          return (
            '<span style="font-size: 14px; width: 500px;"><b>' + launchVehicle + "</b></span>" +
            "<br>" +
            "<table>" +
            "<tr>" +
              "<td class='columnOne'><b>First Successful Launch</b></td>" + 
              "<td class='columnTwo'>" + firstSuccessfulLaunch + "</td>" + 
            "</tr>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Successful Launches</b></td>" + 
              "<td class='columnTwo'>" + successfulLaunches + "</td>" +
            "</tr>" + 
            "<tr>"+ 
              "<td class='columnOne'><b>Successful Launches Including Similar Vehicles</b></td>" + 
              "<td class='columnTwo'>" + successIncludingSimilarVehicles + "</td>" + 
            "</tr>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Launch Cost Per Kilogram ($/kg)</b></td>" + 
              "<td class='columnTwo'>" + fy21CostPerKg + "</td>" + 
            "</tr>" + 
              "<td class='columnOne'><b>Total Launch Cost ($M)</b></td>" + 
              "<td class='columnTwo'>" + fy21TotalLaunchCost + "</td>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Launch Class</b></td>" + 
              "<td class='columnTwo'>" + launchClass + "</td>" +
            "</tr>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Country</b></td>" + 
              "<td class='columnTwo'>" + country + "</td>" +
            "</tr>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Similar Vehicles (Number of Successful Launches)</b></td>" + 
              "<td class='columnTwo'></td>" + 
            "</tr>" + 
            "<tr>" + 
              "<td class='columnOne'><b>Source</b></td>" +
              "<td class='columnTwo'>" + source + "</td>" +
            "</tr>"
            + "</table>"
          )
        } else{
            return (
              '<span style="font-size: 14px;"><b>' +
              launchVehicle +
              "</b></span>" +
              "<br>" +
              "<table>" +
              "<tr>" +
                "<td class='columnOne'><b>First Successful Launch</b></td>" + 
                "<td class='columnTwo'>" + firstSuccessfulLaunch + "</td>" + 
              "</tr>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Successful Launches</b></td>" + 
                "<td class='columnTwo'>" + successfulLaunches + "</td>" +
              "</tr>" + 
              "<tr>"+ 
                "<td class='columnOne'><b>Successful Launches Including Similar Vehicles</b></td>" + 
                "<td class='columnTwo'>" + successIncludingSimilarVehicles + "</td>" + 
              "</tr>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Launch Cost Per Kilogram ($/kg)</b></td>" + 
                "<td class='columnTwo'>" + fy21CostPerKg + "</td>" + 
              "</tr>" + 
                "<td class='columnOne'><b>Total Launch Cost ($M)</b></td>" + 
                "<td class='columnTwo'>" + fy21TotalLaunchCost + "</td>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Launch Class</b></td>" + 
                "<td class='columnTwo'>" + launchClass + "</td>" +
              "</tr>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Country</b></td>" + 
                "<td class='columnTwo'>" + country + "</td>" +
              "</tr>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Similar Vehicles (Number of Successful Launches)</b></td>" + 
                "<td class='columnTwo'>" + similarVehicles + "</td>" + 
              "</tr>" + 
              "<tr>" + 
                "<td class='columnOne'><b>Source</b></td>" +
                "<td class='columnTwo'>" + source + "</td>" +
              "</tr>"
              + "</table>"
            );        
          }
      },
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
        data: fy21Data,
      },
    ],
  });
}

function populateSelect() {
  $(".dropdown").on("change", function() {
    var chart = $("#hcContainer").highcharts();
      chart.destroy();
      renderChart(allData[this.value], datasets[this.value]);
  })
}