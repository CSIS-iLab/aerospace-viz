$(function() {
  /**
 * Extend the Axis.getLinePath method in order to visualize breaks with two parallel
 * slanted lines. For each break, the slanted lines are inserted into the line path.
 */
  Highcharts.wrap(Highcharts.Axis.prototype, 'getLinePath', function (proceed, lineWidth) {
      var axis = this,
          brokenAxis = axis.brokenAxis,
          path = proceed.call(this, lineWidth),
          start = path[0],
          x = start[1],
          y = start[2];

      (brokenAxis.breakArray || []).forEach(function (brk) {
          if (axis.horiz) {
              x = axis.toPixels(brk.from);
              path.splice(1, 0,
                  ['L', x - 4, y], // stop
                  ['M', x - 9, y + 5],
                  ['L', x + 1, y - 5], // left slanted line
                  ['M', x - 1, y + 5],
                  ['L', x + 9, y - 5], // higher slanted line
                  ['M', x + 4, y]
              );
          } else {
              y = axis.toPixels(brk.from);
              path.splice(1, 0,
                  ['L', x, y - 4], // stop
                  ['M', x + 5, y - 9],
                  ['L', x - 5, y + 1], // lower slanted line
                  ['M', x + 5, y - 1],
                  ['L', x - 5, y + 9], // higher slanted line
                  ['M', x, y + 4]
              );
          }
      });
      return path;
  });

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
    colors: ["#f9bc65", "#196c95", "#d66e42"],
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
    xAxis: {
      lineColor: '#000',
      lineWidth: 1
    },
    // Y Axis
    yAxis: {
      lineColor: '#000',
      lineWidth: 1,
      //type: "logarithmic",
      //tickPositions: [0, 10, 50, 250, 500, 1000, 2000].map((v) =>
        //Math.log10(v)
      //),
      labels: {
        x: -15
      },
      tickInterval:  250,
      breaks: [{
        from: 250,
        to: 900,
        breakSize: 1
      }],
      max: 1750,
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
