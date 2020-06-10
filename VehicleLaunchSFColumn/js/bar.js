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
      text: "Successes and Failures"
    },
   // tooltip: {
   //     formatter: function () {
   //         return '$' + this.y + 'M';
    //    }
  //  },
   // Tooltip
    tooltip: {
      valueDecimals: 2,
      valuePrefix: '$',
      valueSuffix: 'M'
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: Gunter's Space Page, ULA, SpaceX"
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
        text: "FY 2018 Dollars, in Millions"
      },
      labels: {
        formatter: function() {
            return this.value;
        }
    }
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
