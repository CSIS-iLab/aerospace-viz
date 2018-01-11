
$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1GmrmO4QJyLE6II0OUtGy1OxqZ8VbJq-SXSawRrde1qM',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    // Chart Title and Subtitle
    title: {
      text: "Interactive Title"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },
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
        text: "X Axis Title"
      }
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Y Axis Title"
      }
    },
    // Additional Plot Options
    plotOptions:
    {
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
