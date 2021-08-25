$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
    googleSpreadsheetKey: '184mzMvc6ZBzuWoQuDpfigcrQug0rcRSBNDJ8KwKkExs',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "Astronauts Launched by Year"
    },
    subtitle: {
      text: "Click the legend to view astronauts launched by gender"
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
        text: "Number of Astronauts Launched Per Year"
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
