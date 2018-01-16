$(function() {
  $('#hcContainer').highcharts({
    // General Chart Options
    chart: {
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "Interactive Title"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: NAME"
    },
    // Chart Legend
    legend: {
      enabled: false
    },
    // X Axis
    xAxis: {
      type: 'category'
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Y Axis Title"
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
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: false,
          format: '{point.y:.0f}'
        }
      },
      column: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    series: [{
      name: 'Incidents by Decade',
      colorByPoint: false,
      data: [ {
        name: '1980s',
        y: 2,
        drilldown: '1980s'
      }, {
        name: '1990s',
        y: 6,
        drilldown: '1990s'
      }, {
        name: '2000s',
        y: 10,
        drilldown: '2000s'
      }, {
        name: '2010s*',
        y: 9,
        drilldown: '2010s*'
      }]
    }],
    drilldown: {
      series: [{
        name: '1980s',
        id: '1980s',
        data: [
          ['Carbon Dioxide', 0 ],
          ['Glove Damage', 0 ],
          ['Visual Impairment', 0 ],
          ['Temperature', 1 ],
          ['Water', 1 ],
          ['Other', 0 ]
        ]
      }, {
        name: '1990s',
        id: '1990s',
        data: [
          ['Carbon Dioxide', 0 ],
          ['Glove Damage', 1 ],
          ['Visual Impairment', 2 ],
          ['Temperature', 2 ],
          ['Water', 0 ],
          ['Other', 1 ]
        ]
      }, {
        name: '2000s',
        id: '2000s',
        data: [
          ['Carbon Dioxide', 3 ],
          ['Glove Damage', 2 ],
          ['Visual Impairment', 4 ],
          ['Temperature', 1 ],
          ['Water', 0 ],
          ['Other', 0 ]
        ]
      }, {
        name: '2010s*',
        id: '2010s*',
        data: [
          ['Carbon Dioxide', 1 ],
          ['Glove Damage', 0 ],
          ['Visual Impairment', 1 ],
          ['Temperature', 1 ],
          ['Water', 5 ],
          ['Other', 1 ]
        ]
      }]
    }
  });
});
