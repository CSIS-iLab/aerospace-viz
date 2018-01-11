
$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1p22ea2G3K8ikFoowmSOMK4KCLSdstAFir3qbgxawJCw',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'scatter',
    },
    // Chart Title and Subtitle
    title: {
      text: "Launches Per Year"
    },
    /*
    subtitle: {
      text: "Click and drag to zoom in"
    },*/
    //Custom Colors
    colors: ['#3e7a82', '#f9bc65', '#d66e42', '#b5bdc1'],
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: NAME"
    },
    // Chart Legend
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // X Axis
    xAxis: {
      title: {
        text: "Year"
      }
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Number of Launches"
      }
    },
    // Additional Plot Options
    plotOptions: {
      scatter: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 5
        }
      }
    }
  });
});
