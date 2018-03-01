$(function() {

    var data = {}
    var datasets
    var seriesData = []

  Highcharts.data({
      // Load Data in from Google Sheets
      googleSpreadsheetKey: '1SJaEspXjNoLx8I0LZSaJsPth2OGrkh2ri-bi0lzxjTQ',
      googleSpreadsheetWorksheet: 1,
      switchRowsAndColumns: true,
      parsed: function(columns) {
        $.each(columns, function (i, code) {
          if ( i == 0 ) {
            return
          }


          data[code[0]] = data[code[0]] || {}
          data[code[0]][code[1]] = data[code[0]][code[1]] || {
            name: code[1],
            data: []
          }


          data[code[0]][code[1]].data.push({
            name: code[0],
            x: code[2],
            y: code[3],
            label: code[1],
            date: code[4],
            info: code[5]
          })

        })



        datasets = Object.keys(data)

        // Convert object to array - we no longer need the keys
        var dataArray = $.map(data, function(value, index) {
            return [value];
        });

        // Convert each series into an array
        dataArray.forEach(function(value) {
          var series = $.map(value, function(value2, index2) {
              return [value2];
          });
          seriesData.push(series)
        })


        renderChart(seriesData[0]);
        /*

        console.log(data);
        */


     }
  })


  function renderChart(data) {

        $('#hcContainer').highcharts({
        //Data
        series: data,
        // General Chart Options
        chart: {
          type: 'scatter',
        },
        // Chart Title and Subtitle
        title: {
          text: "Launch History of the ULA Atlas V"
        },
        /*
        subtitle: {
          text: "Click and drag to zoom in"
        },*/
        //Custom Colors
        colors: ['#3e7a82', '#f9bc65', '#d66e42', '#b5bdc1'],
        // Credits
        credits: {
          enabled: true,
          href: false,
          text: "CSIS Aerospace Security | Source: Gunther's Space Page"
        },
        // Chart Legend
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal',
          itemStyle: {
              'cursor': 'default',
              'pointer-events': 'none'
          }
        },
        // X Axis
        xAxis: {
          title: {
            text: "Year"
          }
        },
        // Y Axis
        yAxis: {
          title: {
            text: "Number of Launches"
          }
        },
        // Additional Plot Options
        tooltip: {
            formatter: function () {
                if (this.point.info == null) {
                    info = '';
                } else {
                    info = '<br><i>' + this.point.info + '</i>';
                }
                if (this.point.date == null) {
                    date = '';
                } else {
                    date = '<b>' + this.point.date + '</b>';
                }
                if (this.point.label == 'Planned') {
                    category = '<b>' + this.point.label + '</b>';
                } else {
                    category = '<br><b>' + this.point.label + '</b>';
                }
                return '<span style="color:' + this.series.color + '">● </span>' + date + info + category;
            }
        },
        plotOptions: {
          scatter: {
            marker: {
              enabled: true,
              symbol: "circle",
              radius: 5
            }
          },
          series: {
              events: {
                  legendItemClick: function () {
                      return false;
                  },
              }
          },
          allowPointSelect: false,
        }
      });
   };
});
