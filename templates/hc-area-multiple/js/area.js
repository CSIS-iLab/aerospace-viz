$(function() {

  var data = {}
  var datasets
  var seriesData = []

  Highcharts.data({
    googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
    googleSpreadsheetKey: '1ngNfu7yzEBIit317w-cUiSamXA8XbP7g-t8ujgeZmqM',
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
            label: code[1]
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

        populateSelect()
        renderChart(seriesData[0])

      }
  })

  function populateSelect() {
    var options = '';
    $.each(datasets, function(i, dataset) {
      options += '<option value="'+ i + '">' + dataset + '</option>';
    })
    $('.datasets').append(options);

    // Destroy & redraw chart so we get smooth animation when switching datasets.
    $('.datasets').on('change', function() {
      var chart = $('#hcContainer').highcharts()
      chart.destroy()

      // Correct color index for individual bomber chart
      if (seriesData[this.value].length <= 1) {

          var colorIndex = this.value-1;
          var modColorIndex;

          modColorIndex = colorIndex%7;

          $.each(seriesData[this.value], function(i, data){
              data._colorIndex = modColorIndex;
          })
      }
      
      renderChart(seriesData[this.value])
    })
  }

  function renderChart(data) {
    $('#hcContainer').highcharts({
      // General Chart Options
      chart: {
        zoomType: 'x',
        type: 'area'
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
        allowDecimals: false
      },
      // Y Axis
      yAxis: {
        title: {
          text: "Y Axis Title"
        },
      },
      series: data,
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
          stacking: "normal",
          marker: {
            enabled: false,
            symbol: "circle"
          }
        }
      }
    });
  }
});
