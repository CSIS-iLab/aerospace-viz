$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
    googleSpreadsheetKey: '12YR7mtP9nscZh-p6nFYVWHDM4UOvz8yzzbLvHVZjhFo',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'area'
    },
    // Chart Title and Subtitle
    title: {
      text: "Payloads Launched by Country"
    },
    subtitle: {
      text: "Total Payloads Launched from the United States, China, and Russia from 1957 to 2017"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: Space-Track.org"
    },
    // Chart Legend
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // Y Axis
    yAxis: {
      type: "logarithmic",
      tickPositions: [0, 10, 50, 250, 500, 1000, 2000].map((v) =>
        Math.log10(v)
      ),
      title: {
        text: "Total Payloads Launched per Year"
      },
    },
    // Tooltip
    /*
    tooltip: {
        formatter: function () {
            return '<span style="color:' + this.series.color + '">● </span><b>' + this.point.series.name + '</b><br> x: ' + this.x + ' y: ' + this.y + '<br><i>x: ' + this.x + ' y: ' + this.y + '</i><br><b>x: ' + this.x + ' y: ' + this.y + '</b>';
        }
    },    */
    // Additional Plot Options
    plotOptions:
    {
      area: {
        stacking: null, // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    }
  });
});
