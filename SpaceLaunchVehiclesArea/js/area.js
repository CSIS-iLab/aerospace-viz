$(function () {
  $("#hcContainer").highcharts({
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
      googleSpreadsheetKey: "16oGMe7Ki23gPXmk4OG8sF7sZwTC4OfnOYo1UQjnibG0",
      googleSpreadsheetRange: "Sheet1",
    },
    // General Chart Options
    chart: {
      zoomType: "x",
      type: "area",
    },
    // Chart Title and Subtitle
    title: {
      text: "Successful U.S. Space Launches",
    },
    subtitle: {
      text: "Click and drag to zoom in",
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: Gunter's Space Page, SpaceX, ULA",
    },
    // Chart Legend
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Cumulative Successful Launches",
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
    plotOptions: {
      area: {
        // stacking: null, // Normal bar graph
        marker: {
          enabled: false,
          symbol: "circle",
        },
      },
    },
  });
});
