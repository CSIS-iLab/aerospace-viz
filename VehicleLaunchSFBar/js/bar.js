$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '11gJ3QuXf4_34uDomERHdO3FQNLZ2_6_t8dY_SZKaESo',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "U.S. Rocket Launches"
    },
    subtitle: {
      text: "Click the legend to view launches by rocket"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security"
    },
    // Chart Legend
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // Y Axis
    yAxis: {
      title: { 
        text: "Number of Successful and Unsuccessful Launches"
      },
    },
    // Additional Plot Options
    plotOptions:
    {
      column: {
        stacking: "normal", // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
            enabled: false,
        }
      }
    }
  });
});
