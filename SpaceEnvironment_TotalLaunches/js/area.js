$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1FpDY2RRA1EW5Pk7cK9tRSstaH6P0f-2GEDc_VjNRI4o',
      googleSpreadsheetWorksheet: 1,
      complete: function (data) {
        // Display legend alphabetically
        const dataItems = data.series
        let dataNames = []

        dataItems.forEach(item => {
            item.legendIndex = ''
            dataNames.push(item.name)
          })

        let notSorting = dataNames.filter(arrayItem => arrayItem === 'Others')
        let alphaSorting = dataNames.filter(arrayItem => arrayItem !== 'Others')
        alphaSorting.sort()
        if (notSorting !== undefined || notSorting.length > 0) {
        alphaSorting.push(notSorting)
        }

          dataItems.forEach(item => {
            for (i = 0; i < alphaSorting.length; i++) {
              if (item.name === alphaSorting[i]) {
                item.legendIndex = i
              }
            }
          })
        },
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'area'
    },
    colors: ['#196c95', '#f9bc65', '#d66e42', '#b5bdc1'],
    // Chart Title and Subtitle
    title: {
      text: "Space Environment: Total Launches by Country"
    },
    subtitle: {
      text: "Total Lauches from the United States, China, Russia, and All Other Space-faring Nations from 1957 to 2018"
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
      layout: 'horizontal',
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Total Launches per Year"
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
        fillOpacity: .7,
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    }
  });
});
