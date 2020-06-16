Highcharts.chart('hcContainer', {
  data: {  
      googleSpreadsheetKey: '11gJ3QuXf4_34uDomERHdO3FQNLZ2_6_t8dY_SZKaESo',
      googleSpreadsheetWorksheet: 1
  },
  chart: {
      type: 'column'
  },

  title: {
      text: 'SLV Launch Data'
  },

  xAxis: {
      categories: [
      '2002', 
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020']
},

yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
        text: 'Number of Launches'
    }
},

credits: {
  enabled: true,
  href: false,
  text: "CSIS Aerospace Security"
},

plotOptions: {
    column: {
        stacking: 'normal'
    }
},

series: [{
    name: 'Delta IV',
    color: '#196C95',
    stack: 'Delta IV'
}, {
    name: 'Delta IV Failure/Partial Failure',
    color: '#B5BDC1',
    stack: 'Delta IV',
    showInLegend: false
}, {
    name: 'Delta IV Heavy',
    color: '#5DB6D0',
    stack: 'Delta IV Heavy'
}, {
    name: 'Delta IV Heavy Failure/Partial Failure',
    color: '#B5BDC1',
    stack: 'Delta IV Heavy',
    showInLegend: false
}, {
    name: 'Atlas V',
    color: '#F9BC65',
    stack: 'Atlas V'
}, {
    name: 'Atlas V Failure/Partial Failure',
    stack: 'Atlas V',
    color: '#B5BDC1',
    showInLegend: false
}, {
    name: 'Falcon 9',
    color: '#4F9793',
    stack: 'Falcon 9'
}, {
    name: 'Falcon 9 Failure/Partial Failure',
    color: '#B5BDC1',
    stack: 'Falcon 9',
    showInLegend: false
}, {
    name: 'Falcon 9 Heavy',
    color: '#3E7A82',
    stack: 'Falcon 9 Heavy'
}, {
    name: 'Falcon 9 Heavy Failure/Partial Failure',
    color: '#B5BDC1',
    stack: 'Falcon 9 Heavy',
    showInLegend: false
}]
});