$(function() {
  var data = {};
  var datasets;
  var seriesData = [];

  var drilldownData = {};
  var seriesDrilldown = [];
  var yTitle = "";

  Highcharts.data({
    googleSpreadsheetKey: "1TNgeonCjrQQKIc8keK4pGSHaZ70bH620RuCCwKW0V80",
    googleSpreadsheetWorksheet: 1,
    switchRowsAndColumns: true,
    parsed: function(columns) {
      $.each(columns, function(i, code) {
        if (i == 0) {
          return;
        }

        var type = code[0];
        var series = code[1];
        var category = code[2];
        var year = code[3];
        var value = code[4];

        data[type] = data[type] || {};
        data[type][series] = data[type][series] || {
          name: series,
          colorByPoint: false,
          data: {},
          drilldown: true
        };

        // Check to see if we already have data for that year, series, and type. If we do, then add the row's value to the existing values. If we don't, set the other year values.
        if (data[type][series].data[year]) {
          data[type][series].data[year].y += value;
        } else {
          data[type][series].data[year] = {
            name: year,
            x: year,
            y: value,
            label: series,
            drilldown: year
          };
        }

        drilldownData[type] = drilldownData[type] || {};
        drilldownData[type][year] = drilldownData[type][year] || {
          name: year,
          id: year,
          data: []
        };

        drilldownData[type][year].data.push([category, value]);
        drilldownData[type][year].data.sort(function(a, b) {
          if (b[1] < a[1]) return -1;
          if (b[1] > a[1]) return 1;
          return 0;
        });
      });

      datasets = Object.keys(data);

      // Convert data object to array - we no longer need the keys
      var dataArray = $.map(data, function(value, index) {
        return [value];
      });

      // Convert each series & its data property into an array.
      dataArray.forEach(function(value) {
        var series = $.map(value, function(item, index) {
          var itemData = $.map(item.data, function(dataItem, dataIndex) {
            return [dataItem];
          });
          item.data = itemData;
          return [item];
        });
        seriesData.push(series);
      });

      // Convert drilldown object to array
      var drilldownArray = $.map(drilldownData, function(value, index) {
        return [value];
      });

      drilldownArray.forEach(function(value) {
        var series = $.map(value, function(item, index) {
          return [item];
        });
        seriesDrilldown.push(series);
      });
      populateSelect();
      renderChart(seriesData[0], seriesDrilldown[0], datasets[0]);
    }
  });

  function populateSelect() {
    var options = "";
    $.each(datasets, function(i, dataset) {
      options += '<option value="' + i + '">' + dataset + "</option>";
    });
    $(".datasets").append(options);

    // Destroy & redraw chart so we get smooth animation when switching datasets.
    $(".datasets").on("change", function() {
      var chart = $("#hcContainer").highcharts();
      chart.destroy();
      renderChart(
        seriesData[this.value],
        seriesDrilldown[this.value],
        datasets[this.value]
      );
    });
  }

  function renderChart(data, drilldown, dataset) {
    var chartCont = {
      // General Chart Options
      chart: {
        type: "column",
        zoomType: "x"
      },
      // Chart Title and Subtitle
      title: {
        text: "NASA Budget History"
      },
      subtitle: {
        text: "Click a column for a budget breakdown"
      },
      // Credits
      credits: {
        enabled: true,
        href: false,
        text: "CSIS Aerospace Security | Source: NASA, OMB"
      },
      // Chart Legend
      legend: {
        align: "center",
        verticalAlign: "bottom",
        layout: "horizontal"
      },
      // X Axis
      xAxis: {
        allowDecimals: false,
        type: "category",
        tickmarkPlacement: "on"
      },
      // Y Axis
      yAxis: {
        title: {
          text: "Budget Authority, in Billions (" + dataset + ")"
        },
        labels: {
          formatter: function() {
            var label = "$" + this.value / 1000 + "B";
            return label;
          }
        }
      },
      // Tooltip
      tooltip: {
        valueDecimals: 2,
        valuePrefix: "$",
        valueSuffix: "M"
      },
      series: data,
      drilldown: {
        series: drilldown
      },
      // Additional Plot Options
      plotOptions: {
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false
          }
        },
        column: {
          dataLabels: {
            enabled: false
          }
        }
      }
    };
    $("#hcContainer").highcharts(chartCont);
  }
});
