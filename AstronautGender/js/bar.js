$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
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
      text: "Astronaut Women by Country"
    },
    subtitle: {
      text: "Click the legend to compare with the number of male astronauts by country"
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
        text: "Number of Astronauts"
      }
    },
    // Additional Plot Options
    plotOptions:
    {series: {
          visible: false
        },
      column: {
        stacking: null, // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
            enabled: false
        }
      }
    }}, function(chart) {chart.series[1].show()});
    });

