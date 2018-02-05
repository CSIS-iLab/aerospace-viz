$(function() {
  $('#hcContainer').highcharts({
    // General Chart Options
    chart: {
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "Historical NASA Budgets in FY18 Dollars"
    },
    subtitle: {
      text: "Click a year to view each year's budget breakdown"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Aerospace Security | Source: NASA, OMB"
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
        text: "FY18 Dollars, in millions"
      },
    },
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
      name: 'NASA Topline Budget',
      colorByPoint: false,
      data: [ {
        name: 'FY59',
        y: 2225.629
      }, {
        name: 'FY60',
        y: 3474.778
      }, {
        name: 'FY61',
        y: 6305.599
      }, {
        name: 'FY62',
        y: 11816.316,
        drilldown: 'FY62'
      }, {
        name: 'FY63',
        y: 23492.916,
        drilldown: 'FY63'
      }, {
        name: 'FY64',
        y: 32228.120,
        drilldown: 'FY64'
      }, {
        name: 'FY65',
        y: 32602.998,
        drilldown: 'FY65'
      }, {
        name: 'FY66',
        y: 31461.453,
        drilldown: 'FY66'
      }, {
        name: 'FY67',
        y: 29305.473,
        drilldown: 'FY67'
      }, {
        name: 'FY68',
        y: 26174.749,
        drilldown: 'FY68'
      }, {
        name: 'FY69',
        y: 21764.311,
        drilldown: 'FY69'
      }, {
        name: 'FY70',
        y: 19383.784,
        drilldown: 'FY70'
      }, {
        name: 'FY71',
        y: 16308.759,
        drilldown: 'FY71'
      }, {
        name: 'FY72',
        y: 15549.787,
        drilldown: 'FY72'
      }, {
        name: 'FY73',
        y: 15349.189,
        drilldown: 'FY73'
      }, {
        name: 'FY74',
        y: 12781.996,
        drilldown: 'FY74'
      }, {
        name: 'FY75',
        y: 12315.449,
        drilldown: 'FY75'
      }, {
        name: 'FY76',
        y: 12667.841,
        drilldown: 'FY76'
      }, {
        name: 'FY77',
        y: 12894.445,
        drilldown: 'FY77'
      }, {
        name: 'FY78',
        y: 13230.919,
        drilldown: 'FY78'
      }, {
        name: 'FY79',
        y: 13684.745,
        drilldown: 'FY79'
      }, {
        name: 'FY80',
        y: 14201.956,
        drilldown: 'FY80'
      }, {
        name: 'FY81',
        y: 13620.833,
        drilldown: 'FY81'
      }, {
        name: 'FY82',
        y: 14026.314,
        drilldown: 'FY82'
      }, {
        name: 'FY83',
        y: 15311.188,
        drilldown: 'FY83'
      }, {
        name: 'FY84',
        y: 15611.960,
        drilldown: 'FY84'
      }, {
        name: 'FY85',
        y: 15343.280,
        drilldown: 'FY85'
      }, {
        name: 'FY86',
        y: 15465.633,
        drilldown: 'FY86'
      }, {
        name: 'FY87',
        y: 21165.928,
        drilldown: 'FY87'
      }, {
        name: 'FY88',
        y: 17007.568,
        drilldown: 'FY88'
      }, {
        name: 'FY89',
        y: 19625.239,
        drilldown: 'FY89'
      }, {
        name: 'FY90',
        y: 21291.384,
        drilldown: 'FY90'
      }, {
        name: 'FY91',
        y: 23578.954,
        drilldown: 'FY91'
      }, {
        name: 'FY92',
        y: 23510.486,
        drilldown: 'FY92'
      }, {
        name: 'FY93',
        y: 22953.440,
        drilldown: 'FY93'
      }, {
        name: 'FY94',
        y: 22870.517,
        drilldown: 'FY94'
      }, {
        name: 'FY95',
        y: 21295.992,
        drilldown: 'FY95'
      }, {
        name: 'FY96',
        y: 20954.537,
        drilldown: 'FY96'
      }, {
        name: 'FY97',
        y: 20330.171,
        drilldown: 'FY97'
      }, {
        name: 'FY98',
        y: 19993.173,
        drilldown: 'FY98'
      }, {
        name: 'FY99',
        y: 19751.336,
        drilldown: 'FY99'
      }, {
        name: 'FY00',
        y: 19273.800,
        drilldown: 'FY00'
      }, {
        name: 'FY01',
        y: 19725.588,
        drilldown: 'FY01'
      }, {
        name: 'FY02',
        y: 20281.727,
        drilldown: 'FY02'
      }, {
        name: 'FY03',
        y: 20566.920,
        drilldown: 'FY03'
      }, {
        name: 'FY04',
        y: 20054.119,
        drilldown: 'FY04'
      }, {
        name: 'FY05',
        y: 20479.071,
        drilldown: 'FY05'
      }, {
        name: 'FY06',
        y: 20398.442,
        drilldown: 'FY06'
      }, {
        name: 'FY07',
        y: 19413.332,
        drilldown: 'FY07'
      }, {
        name: 'FY08',
        y: 20103.595,
        drilldown: 'FY08'
      }, {
        name: 'FY09',
        y: 21686.124,
        drilldown: 'FY09'
      }, {
        name: 'FY10',
        y: 21429.438,
        drilldown: 'FY10'
      }, {
        name: 'FY11',
        y: 20690.815,
        drilldown: 'FY11'
      }, {
        name: 'FY12',
        y: 19572.854,
        drilldown: 'FY12'
      }, {
        name: 'FY13',
        y: 18284.823,
        drilldown: 'FY13'
      }, {
        name: 'FY14',
        y: 18772.186,
        drilldown: 'FY14'
      }, {
        name: 'FY15',
        y: 18935.013,
        drilldown: 'FY15'
      }, {
        name: 'FY16',
        y: 20036.468,
        drilldown: 'FY16'
      }, {
        name: 'FY17',
        y: 19714.028,
        drilldown: 'FY17'
      }]
    }],
    drilldown: {
      series: [{
        name: 'FY62',
        id: 'FY62',
        data: [
          ['Human Spaceflight', 5977.765],
          ['Uncrewed Spaceflight', 2779.091],
          ['Space Research', 1500.916],
          ['Supporting Operations and Other', 857.296],          
          ['Space Applications', 493.399],          
          ['Aircraft Technology', 187.129],
          ['Adjustment to NOA Basis', 20.720]
        ]
      }, {
        name: 'FY63',
        id: 'FY63',
        data: [
          ['Human Spaceflight', 14357.990],
          ['Uncrewed Spaceflight', 3762.832],
          ['Space Research', 3147.526],
          ['Supporting Operations and Other', 1387.317],          
          ['Space Applications', 683.105],
          ['Aircraft Technology', 300.617],
          ['Adjustment to NOA Basis', -146.471]
        ]
      }, {
        name: 'FY64',
        id: 'FY64',
        data: [
          ['Human Spaceflight', 21843.286],
          ['Scientific Investigations', 4336.809],
          ['Space Technology', 3074.882],
          ['Supporting Operations and Other', 2533.965],
          ['Space Applications', 746.288],          
          ['Aircraft Technology', 337.441],
          ['Adjustment to Appropriation', -644.550]
        ]
      }, {
        name: 'FY65',
        id: 'FY65',
        data: [
          ['Human Spaceflight', 21440.548],
          ['Scientific Investigations', 4301.897],
          ['Space Technology', 3096.471],
          ['Supporting Operations and Other', 2219.572],
          ['Space Applications', 516.700],
          ['Aircraft Technology', 509.868],
          ['Adjustment to Appropriation', 517.942]
        ]
      }, {
        name: 'FY66',
        id: 'FY66',
        data: [
          ['Human Spaceflight', 21462.486],
          ['Scientific Investigations', 4188.781],
          ['Space Technology', 2454.297],
          ['Supporting Operations and Other', 2029.340],
          ['Space Applications', 700.967],
          ['Aircraft Technology', 488.792],
          ['Adjustment to NOA Basis', 136.789]          
        ]
      }, {
        name: 'FY67',
        id: 'FY67',
        data: [
          ['Human Spaceflight', 20019.350],
          ['Scientific Investigations', 3329.577],
          ['Space Technology', 2287.757],
          ['Supporting Operations and Other', 2045.885],
          ['Space Applications', 650.105],
          ['Aircraft Technology', 621.789],
          ['Adjustment to NOA Basis', 351.010]
        ]
      }, {
        name: 'FY68',
        id: 'FY68',
        data: [
          ['Human Spaceflight', 17995.711],
          ['Scientific Investigations', 2914.770],
          ['Space Technology', 2166.399],
          ['Supporting Operations and Other', 1867.506],
          ['Aircraft Technology', 777.462],
          ['Space Applications', 744.379],
          ['Adjustment to NOA Basis', -291.477]
        ]
      }, {
        name: 'FY69',
        id: 'FY69',
        data: [
          ['Human Spaceflight', 14319.760],
          ['Space Science', 2963.423],  
          ['Supporting Operations and Other', 1911.446],
          ['Space Technology', 1682.400],
          ['Aviation Technology', 921.094],
          ['Less Receipts', -33.812]
        ]
      }, {
        name: 'FY70',
        id: 'FY70',
        data: [
          ['Human Spaceflight', 11707.996],
          ['Space Science', 3296.868],  
          ['Supporting Operations and Other', 1888.286],
          ['Space Technology', 1492.414],
          ['Aviation Technology', 1028.751],
          ['Less Receipts', -30.531]
        ]
      }, {
        name: 'FY71',
        id: 'FY71',
        data: [
          ['Human Spaceflight', 8775.956],
          ['Space Science', 3468.419],  
          ['Supporting Operations and Other', 1786.418],
          ['Space Technology', 1300.288],
          ['Aviation Technology', 1033.827],
          ['Less Receipts', -56.149]
        ]
      }, {
        name: 'FY72',
        id: 'FY72',
        data: [
          ['Human Spaceflight', 7709.056],
          ['Space Science', 4234.267],  
          ['Supporting Operations and Other', 1557.988],
          ['Aviation Technology', 1107.945],
          ['Space Technology', 1002.135],
          ['Less Receipts', -61.605]
        ]
      }, {
        name: 'FY73',
        id: 'FY73',
        data: [
          ['Human Spaceflight', 6934.218],
          ['Space Science', 4922.628],  
          ['Supporting Operations and Other', 1482.106],
          ['Aeronautical Technology', 1410.456],
          ['Space Technology', 660.166],
          ['Less Receipts', -60.384]
        ]
      }, {
        name: 'FY74',
        id: 'FY74',
        data: [
          ['Human Spaceflight', 5929.913],
          ['Space Science and Applications', 4295.599],
          ['Supporting Operations and Other', 1407.034],
          ['Air Transportation', 1171.757],
          ['Less Receipts', -22.307]
        ]
      }, {
        name: 'FY75',
        id: 'FY75',
        data: [
          ['Human Spaceflight', 5760.305],
          ['Space Science and Applications', 4108.074],
          ['Supporting Operations and Other', 1257.862],
          ['Air Transportation', 1196.837],
          ['Less Receipts', -7.628]
        ]
      }, {
        name: 'FY76',
        id: 'FY76',
        data: [
          ['Spaceflight R&D', 8923.679],
          ['Spaceflight Program Management', 2308.990],
          ['Air Transportation R&D', 625.399],
          ['Air Transportation Program Management', 516.850],
          ['Spaceflight Facilities Construction', 276.392],
          ['Air Transportation Facilities Construction', 16.531]
        ]
      }, {
        name: 'FY77',
        id: 'FY77',
        data: [
          ['Spaceflight R&D', 8871.102],
          ['Spaceflight Program Management', 2302.446],
          ['Air Transportation R&D', 632.480],
          ['Air Transportation Program Management', 507.531],
          ['Spaceflight Facilities Construction', 276.614],
          ['Spaceflight, Control, and Data Communications', 187.991],
          ['Air Transportation Facilities Construction', 116.282]
        ]
      }, {
        name: 'FY78',
        id: 'FY78',
        data: [
          ['Spaceflight R&D', 8678.545],
          ['Spaceflight Program Management', 2241.597],
          ['Air Transportation R&D', 710.845],
          ['Spaceflight, Control, and Data Communications', 561.349],
          ['Air Transportation Program Management', 532.448],
          ['Spaceflight Facilities Construction', 386.413],
          ['Air Transportation Facilities Construction', 119.721]
        ]
      }, {
        name: 'FY79',
        id: 'FY79',
        data: [
          ['Spaceflight R&D', 9271.491],
          ['Spaceflight Program Management', 2180.291],
          ['Air Transportation R&D', 762.068],
          ['Spaceflight, Control, and Data Communications', 530.288],
          ['Air Transportation Program Management', 514.992],
          ['Air Transportation Facilities Construction', 220.829],
          ['Spaceflight Facilities Construction', 204.786]
        ]
      }, {
        name: 'FY80',
        id: 'FY80',
        data: [
          ['Spaceflight R&D', 10033.942],
          ['Spaceflight Program Management', 2142.793],
          ['Air Transportation R&D', 818.423],
          ['Air Transportation Program Management', 501.715],
          ['Spaceflight, Control, and Data Communications', 282.732],
          ['Spaceflight Facilities Construction', 256.437],
          ['Air Transportation Facilities Construction', 165.915]
        ]
      }, {
        name: 'FY81',
        id: 'FY81',
        data: [
          ['Spaceflight R&D', 9826.276],
          ['Spaceflight Program Management', 2081.376],
          ['Air Transportation R&D', 656.191],
          ['Air Transportation Program Management', 509.056],
          ['Spaceflight, Control, and Data Communications', 268.074],
          ['Spaceflight Facilities Construction', 173.378],
          ['Air Transportation Facilities Construction', 106.482]
        ]
      }, {
        name: 'FY82',
        id: 'FY82',
        data: [
          ['Spaceflight R&D', 10120.133],
          ['Spaceflight Program Management', 2159.291],
          ['Air Transportation R&D', 599.081],
          ['Air Transportation Program Management', 517.798],
          ['Spaceflight, Control, and Data Communications', 331.090],
          ['Spaceflight Facilities Construction', 247.678],
          ['Air Transportation Facilities Construction', 51.243]
        ]
      }, {
        name: 'FY83',
        id: 'FY83',
        data: [
          ['Spaceflight R&D', 11397.536],
          ['Spaceflight Program Management', 2059.062],
          ['Air Transportation R&D', 606.833],
          ['Air Transportation Program Management', 536.016],
          ['Spaceflight, Control, and Data Communications', 410.624],
          ['Spaceflight Facilities Construction', 257.523],
          ['Air Transportation Facilities Construction', 43.594]
        ]
      }, {
        name: 'FY84',
        id: 'FY84',
        data: [
          ['Spaceflight, Control, and Data Communications', 8194.107],
          ['Spaceflight R&D', 3661.115],
          ['Spaceflight Program Management', 2084.277],
          ['Air Transportation R&D', 660.043],
          ['Air Transportation Program Management', 545.181],
          ['Spaceflight Facilities Construction', 416.995],
          ['Air Transportation Facilities Construction', 50.241]
        ]
      }, {
        name: 'FY85',
        id: 'FY85',
        data: [
          ['Spaceflight, Control, and Data Communications', 7282.386],
          ['Spaceflight R&D', 4306.986],
          ['Spaceflight Program Management', 2173.447],
          ['Air Transportation R&D', 693.754],
          ['Air Transportation Program Management', 525.992],
          ['Spaceflight Facilities Construction', 268.060],
          ['Air Transportation Facilities Construction', 92.656]
        ]
      }, {
        name: 'FY86',
        id: 'FY86',
        data: [
          ['Spaceflight, Control, and Data Communications', 7270.381],
          ['Spaceflight R&D', 4520.540],
          ['Spaceflight Program Management', 2163.068],
          ['Air Transportation R&D', 668.091],
          ['Air Transportation Program Management', 494.450],
          ['Spaceflight Facilities Construction', 239.418],
          ['Air Transportation Facilities Construction', 109.685]
        ]
      }, {
        name: 'FY87',
        id: 'FY87',
        data: [
          ['Spaceflight, Control, and Data Communications', 11819.179],
          ['Spaceflight R&D', 5342.707],
          ['Spaceflight Program Management', 2307.835],
          ['Air Transportation R&D', 768.310],
          ['Air Transportation Program Management', 506.716],
          ['Spaceflight Facilities Construction', 291.628],
          ['Air Transportation Facilities Construction', 129.553]
        ]
      }, {
        name: 'FY88',
        id: 'FY88',
        data: [
          ['Spaceflight, Control, and Data Communications', 7143.048],
          ['Spaceflight R&D', 5482.042],
          ['Spaceflight Program Management', 2740.124],
          ['Air Transportation R&D', 674.099],
          ['Air Transportation Program Management', 568.115],
          ['Spaceflight Facilities Construction', 254.271],
          ['Air Transportation Facilities Construction', 145.867]
        ]
      }, {
        name: 'FY89',
        id: 'FY89',
        data: [
          ['Spaceflight, Control, and Data Communications', 8047.205],
          ['Spaceflight R&D', 6818.879],
          ['Spaceflight Program Management', 2785.425],
          ['Air Transportation R&D', 785.010],
          ['Air Transportation Program Management', 692.155],
          ['Spaceflight Facilities Construction', 400.718],
          ['Air Transportation Facilities Construction', 95.847]
        ]
      }, {
        name: 'FY90',
        id: 'FY90',
        data: [
          ['Spaceflight R&D', 8279.514],
          ['Spaceflight, Control, and Data Communications', 7916.439],
          ['Spaceflight Program Management', 2952.005],
          ['Air Transportation R&D', 822.472],
          ['Spaceflight Facilities Construction', 626.118],
          ['Air Transportation Program Management', 573.049],
          ['Air Transportation Facilities Construction', 106.703],
          ['Inspector General', 15.085]
        ]
      }, {
        name: 'FY91',
        id: 'FY91',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY92',
        id: 'FY92',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY93',
        id: 'FY93',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY94',
        id: 'FY94',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY95',
        id: 'FY95',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY96',
        id: 'FY96',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY97',
        id: 'FY97',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY98',
        id: 'FY98',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY99',
        id: 'FY99',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY00',
        id: 'FY00',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY01',
        id: 'FY01',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY02',
        id: 'FY02',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY03',
        id: 'FY03',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY04',
        id: 'FY04',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY05',
        id: 'FY05',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY06',
        id: 'FY06',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY07',
        id: 'FY07',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY08',
        id: 'FY08',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY09',
        id: 'FY09',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY10',
        id: 'FY10',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY11',
        id: 'FY11',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY12',
        id: 'FY12',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY13',
        id: 'FY13',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY14',
        id: 'FY14',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY15',
        id: 'FY15',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY16',
        id: 'FY16',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }, {
        name: 'FY17',
        id: 'FY17',
        data: [
          ['Sub-budget 1', 9999],
          ['Sub-budget 2', 9999],
          ['Sub-budget 3', 9999],
          ['Sub-budget 4', 9999],
          ['Sub-budget 5', 9999],          
          ['Sub-budget 6', 9999],
          ['Sub-budget 7', 9999]
        ]
      }]
    }
  });
});
