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
    },
    reversedStacks: false
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

tooltip: {
    shared: true,
    useHTML: true,
    formatter: function() {
        let string = ""

        for (i = 0; i < this.points.length; i+=2 ) {
            //console.log(this.points[i].series.userOptions.stack)
            string += '<b>' + this.points[i].series.userOptions.stack + '</b>' + '<br>' + '&emsp;' + this.points[i].series.name.slice(-8) + ': ' + this.points[i].y + '<br>' + 
            '&emsp;' + this.points[i+1].series.name.slice(-8) + ': ' + this.points[i+1].y + '</br>'
        
        }

        return '<span style="font-size: 14px;"><b>' + this.x + '</b></span>' + '<br>' + string
    }
},

legend: {
    labelFormatter: function() {

        if ((this.name === "Delta IV Success") || (this.name === "Atlas V Success") || (this.name === "Falcon 9 Success")) {
            let name = this.name.split("")
            let updateName = name.slice(0,8)
            finalName = updateName.join("")
            return finalName
        } else if ((this.name === "Delta IV Heavy Success") || (this.name ==="Falcon 9 Heavy Success")) {
            let name = this.name.split("")
            let updateName = name.slice(0,14)
            finalName = updateName.join("")
            return finalName
        }
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