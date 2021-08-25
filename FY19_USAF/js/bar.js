$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
    googleSpreadsheetKey: '18MclhcrGMnlHgdMn2npk2fkgxED9Q-jY8nHbtdxqpJc',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "United States Air Force Budget by Weapon System"
    },
    subtitle: {
      text: "FY 2018 Request and FY 2019 Estimates of Selected Programs"
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
      text: "CSIS Aerospace Security | Source: US Air Force Budget Documents"
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
        stacking: null, // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
            enabled: false,
        }
      }
    }
  });
});
