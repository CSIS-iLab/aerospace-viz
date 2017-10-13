$(function() {
  $('#hcContainer').highcharts({
    // General Chart Options
    chart: {
      type: 'pie',
      width: 700
    },
    // Chart Title and Subtitle
    title: {
      text: "Title"
    },
    tooltip: {
      valueSuffix: "%"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: NAME"
    },
    // Chart Legend
    legend: {
      title: false,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    // Additional Plot Options
    plotOptions:
    {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.0f}'
        }
      }
    },
    series: [{
      name: 'Astronauts',
      colorByPoint: true,
      data: [{
        name: 'Men',
        y: 485,
        drilldown: 'Men Astronauts'
      }, {
        name: 'Women',
        y: 57,
        drilldown: 'Women Astronauts'
      }]
    }],
    drilldown: {
      series: [{
        name: 'Men Astronauts',
        id: 'Men Astronauts',
        data: [
          {
            name: 'United States',
            y: 287
          }, {
            name: 'Soviet Union/Russia',
            y: 114
          }, {
            name: 'China',
            y: 10
          }, {
            name: 'Germany',
            y: 10
          }, {
            name: 'France',
            y: 9
          }, {
            name: 'Japan',
            y: 8
          }, {
            name: 'Canada',
            y: 6
          }, {
            name: 'Italy',
            y: 6
          }, {
            name: 'Others',
            y: 35
          }
        ]        
      }, {
        name: 'Women Astronauts',
        id: 'Women Astronauts',
        data: [
          {
            name: 'United States',
            y: 45
          }, {
            name: 'Soviet Union/Russia',
            y: 4
          }, {
            name: 'Canada',
            y: 2
          }, {
            name: 'Japan',
            y: 2
          }, {
            name: 'China',
            y: 1
          }, {
            name: 'France',
            y: 1
          }, {
            name: 'Italy',
            y: 1
          }, {
            name: 'South Korea',
            y: 1
          }
        ]       
      }]
    }
  });
});
