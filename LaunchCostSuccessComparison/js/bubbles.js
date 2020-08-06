let heavyData = {
  fy21: {
    title: 'FY21 Dollars',
    values: []
  },
  thenYear: {
    title: 'Then-Year Dollars',
    values: []
  }
}

let mediumData = {
  fy21: {
    values: []
  },
  thenYear: {
    values: []
  }
}

let smallData = {
  fy21: {
    values: []
  },
  thenYear: {
    values: []
  }
}

Highcharts.data({
  googleSpreadsheetKey: "1FGdaphIbRjDpXsOdU3omWGRpH5DTImmzWW-H43lLOms",
  googleSpreadsheetWorksheet: 1,
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    columns.splice(0, 2);
    for (let i = 0; i < columns.length; i++) {
      const row = columns[i]
    
       // This will skip the current loop iteration and move to the next one
      if (row[2] == null) {
        continue
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

      const data = {
        x: firstLaunchYear,
        z: successIncludingSimilarVehicles,
        launchVehicle: launchVehicle,
        successfulLaunches: successfulLaunches,
        launchClass: launchClass,
        country: country,
        similarVehicles: similarVehicles,
        source: source,
      }

      if (successfulLaunches != null && launchClass == "Heavy") {
        heavyData.fy21.values.push({
          ...data,
          y: fy21CostPerKg,
          launchCost: fy21TotalLaunchCost,
          color: '#196C95',
          legendIndex: 1
        })
        
        heavyData.thenYear.values.push({
          ...data,
          y: thenYearCostPerKg,
          launchCost: thenYearLaunchCost,
          color: '#196C95',
          legendIndex: 1
        })

      }

      if (successfulLaunches != null && launchClass == "Medium") {
        mediumData.fy21.values.push({
          ...data,
          y: fy21CostPerKg,
          launchCost: fy21TotalLaunchCost,
          color: '#4F9793',
          legendIndex: 2
        })

        mediumData.thenYear.values.push({
          ...data,
          y: thenYearCostPerKg,
          launchCost: thenYearLaunchCost,
          color: '#4F9793',
          legendIndex: 2
        })
      }

      if (successfulLaunches != null && launchClass == "Small") {
        smallData.fy21.values.push({
          ...data,
          y: fy21CostPerKg,
          launchCost: fy21TotalLaunchCost,
          color: '#F9BC65',
          legendIndex: 3
        })

        smallData.thenYear.values.push({
          ...data,
          y: thenYearCostPerKg,
          launchCost: thenYearLaunchCost,
          color: '#F9BC65',
          legendIndex: 3
        })
      }

    }
    renderChart(
      heavyData.fy21, mediumData.fy21, smallData.fy21
    );
  },
});

function renderChart(heavyData, mediumData, smallData) {
  Highcharts.chart("hcContainer", {
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
      backgroundColor: 'rgba(0,0,0,0)'
    },
    legend: {
      title: {
        text: 'Launch Vehicle Class<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
      },
    },
    credits: {
      enabled: true,
      text: "CSIS Aerospace Security Project"
    },
    title: {
      text:
        "Comparing Cost of Launch to Low-Earth Orbit for Successful Orbital Launch Vehicles",
      margin: 70
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
        text: "$K / kg (" + heavyData.title + ")",
      },
      type: "logarithmic"
    }],
    tooltip: {
      useHTML: true,
      formatter: function() {
        let launchVehicle = this.point.launchVehicle
        let firstSuccessfulLaunch = this.point.x
        let successfulLaunches = this.point.successfulLaunches
        let successIncludingSimilarVehicles = this.point.z
        let fy21CostPerKg = this.point.y
        let launchCost = this.point.launchCost
        let launchClass = this.point.launchClass
        let country = this.point.country
        let similarVehicles = this.point.similarVehicles
        let source = this.point.source

        let similarVehiclesRow = ''

        if (similarVehicles) {
          similarVehiclesRow = `
            Similar launch vehicles with successful launches include <span style="font-family: 'Roboto'; text-decoration: underline; text-decoration-color: #D66E42">${similarVehicles}</span>.
          `
        }

        const html = `
          <span style="font-size: 16px; width: 500px; font-family: 'Roboto'"><b>${launchVehicle}</b></span>
          <ul style="font-family: 'Roboto'">
            <li>Country: ${country}</li>
            <li>Payload Cost ($/kg): ${launchCost}</li>
            <li>Class: ${launchClass}</li>
          </ul>
          <span style="font-family: 'Roboto'">The
          <span style="font-family: 'Roboto'; text-decoration: underline; text-decoration-color: #D66E42">${launchVehicle}</span> 
          launch vehicle has completed
          <span style="font-family: 'Roboto'; text-decoration: underline; text-decoration-color: #D66E42">${successfulLaunches}</span>
          successful launches since
          <span style="font-family: 'Roboto'; text-decoration: underline; text-decoration-color: #D66E42"> ${firstSuccessfulLaunch}</span>
          at approximately
          <span style="font-family: 'Roboto'; text-decoration: underline; text-decoration-color: #D66E42">${fy21CostPerKg} per launch.</span> 
          <span style="font-family: 'Roboto'">${similarVehiclesRow}</span><br><br>
          <span style="font-size: 10px; font-family: 'Roboto'">${source}</span>
        `
        $("#tooltip").html(html);
        return false
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
        data: heavyData.values,
      },
      {
        name: "Medium",
        type: "bubble",
        data: mediumData.values,
      },
      {
        name: "Small",
        type: "bubble",
        data: smallData.values
      }
    ],
  });
}

const select = document.getElementById("dropdown");
  select.addEventListener("change", function () {
    let chart = Highcharts.chart("hcContainer", {});
    chart.destroy();
    renderChart(
      heavyData[Object.keys(heavyData)[this.value]], 
      mediumData[Object.keys(mediumData)[this.value]],
      smallData[Object.keys(smallData)[this.value]]
    );
  });