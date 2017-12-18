
$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1D-adxLnHBUYEiNHh5iT11OMRSPx80MF4YncXe471bSE',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'line'
    },
    // Chart Title and Subtitle
    title: {
      text: "Average Number of Available Interceptors by Latitude"
    },
    subtitle: {
      text: "For 45°-inclined Walker Constellations"
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
        text: "Average Number of Available Interceptors"
      }
    },
    // X Axis
    xAxis: {
      title: {
        text: "Degrees (°N) Latitude"
      }
    },
    // Additional Plot Options
    plotOptions:
    {
      line: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3
        },
        lineWidth: 3
      }
    }
  });
});
