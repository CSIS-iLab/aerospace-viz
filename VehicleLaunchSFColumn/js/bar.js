Highcharts.chart('hcContainer', {

  chart: {
    type: 'column',
    events: {
      load: function() {
        var chart = this;

        // Add event:
        chart.series.forEach(function(series) {
          if (series.legendGroup) {
            Highcharts.addEvent(series.legendGroup.element, 'mouseover', function() {
              // Internal method:
              chart.pointer.applyInactiveState([series.points[0]]);
            });
            Highcharts.addEvent(series.legendGroup.element, 'mouseout', function() {
              chart.series.forEach(function(s) {
                s.setState();
              });
            });
          }
        });
      }
    }
  },

  title: {
    text: 'SLV Launch Data Stacked Column'
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
    pointFormat: '<span style="color:{point.color}">●</span> {series.userOptions.stack}: <b>{point.y}</b><br/>'
  },

  xAxis: {
    type: 'category'
  },

  yAxis: {
    reversedStacks: false,
    title: undefined
  },

  series: [{
    name: 'Success',
    color: '#196c95',
    id: 'Success',
    stack: 'Delta IV',
    data: [{
      y: 0,
      name: '2002'
    }, {
      y: 2,
      name: '2003'
    }, {
      y: 0,
      name: '2004'
    }, {
      y: 0,
      name: '2005'
    }, {
      y: 3,
      name: '2006'
    }, {
      y: 0,
      name: '2007'
    }, {
      y: 0,
      name: '2008'
    }, {
      y: 2,
      name: '2009'
    }, {
      y: 2,
      name: '2010'
    }, {
      y: 2,
      name: '2011'
    }, {
      y: 3,
      name: '2012'
    }, {
      y: 2,
      name: '2013'
    }, {
      y: 3,
      name: '2014'
    }, {
      y: 2,
      name: '2015'
    }, {
      y: 3,
      name: '2016'
    }, {
      y: 1,
      name: '2017'
    }, {
      y: 1, 
      name: '2018'
    }, {
      y: 2, 
      name: '2019'
    }, {
      y: 0,
      name: '2020'
    }]
  }, {
    linkedTo: 'Success',
    color: '#196c95',
    stack: 'Atlas V',
    data: [{
      y: 1,
      name: '2002'
    }, {
      y: 2,
      name: '2003'
    }, {
      y: 1,
      name: '2004'
    }, {
      y: 2,
      name: '2005'
    }, {
      y: 2,
      name: '2006'
    }, {
      y: 3,
      name: '2007'
    }, {
      y: 2,
      name: '2008'
    }, {
      y: 5,
      name: '2009'
    }, {
      y: 4,
      name: '2010'
    }, {
      y: 5,
      name: '2011'
    }, {
      y: 6,
      name: '2012'
    }, {
      y: 8,
      name: '2013'
    }, {
      y: 9,
      name: '2014'
    }, {
      y: 9,
      name: '2015'
    }, {
      y: 8,
      name: '2016'
    }, {
      y: 6,
      name: '2017'
    }, {
      y: 5, 
      name: '2018'
    }, {
      y: 2, 
      name: '2019'
    }, {
      y: 3,
      name: '2020'
    }]
  }, {
    linkedTo: 'Success',
    color: '#196c95',
    stack: 'Falcon 9',
    data: [{
      y: 0,
      name: '2002'
    }, {
      y: 0,
      name: '2003'
    }, {
      y: 0,
      name: '2004'
    }, {
      y: 0,
      name: '2005'
    }, {
      y: 0,
      name: '2006'
    }, {
      y: 0,
      name: '2007'
    }, {
      y: 0,
      name: '2008'
    }, {
      y: 0,
      name: '2009'
    }, {
      y: 2,
      name: '2010'
    }, {
      y: 0,
      name: '2011'
    }, {
      y: 2,
      name: '2012'
    }, {
      y: 3,
      name: '2013'
    }, {
      y: 6,
      name: '2014'
    }, {
      y: 6,
      name: '2015'
    }, {
      y: 8,
      name: '2016'
    }, {
      y: 18,
      name: '2017'
    }, {
      y: 20, 
      name: '2018'
    }, {
      y: 11, 
      name: '2019'
    }, {
      y: 8,
      name: '2020'
    }]
  }, 
  
  {
    name: 'Failure/Partial Failure',
    color: '#f9bc65',
    id: 'Failure/Partial Failure',
    stack: 'Delta IV',
    data: [{
      y: 0,
      name: '2002'
    }, {
      y: 0,
      name: '2003'
    }, {
      y: 0,
      name: '2004'
    }, {
      y: 0,
      name: '2005'
    }, {
      y: 0,
      name: '2006'
    }, {
      y: 0,
      name: '2007'
    }, {
      y: 0,
      name: '2008'
    }, {
      y: 0,
      name: '2009'
    }, {
      y: 0,
      name: '2010'
    }, {
      y: 0,
      name: '2011'
    }, {
      y: 0,
      name: '2012'
    }, {
      y: 0,
      name: '2013'
    }, {
      y: 0,
      name: '2014'
    }, {
      y: 0,
      name: '2015'
    }, {
      y: 0,
      name: '2016'
    }, {
      y: 0,
      name: '2017'
    }, {
      y: 0, 
      name: '2018'
    }, {
      y: 0, 
      name: '2019'
    }, {
      y: 0,
      name: '2020'
    }]
  }, {
    linkedTo: 'Failure/Partial Failure',
    color: '#f9bc65',
    stack: 'Atlas V',
    data: [{
      y: 0,
      name: '2002'
    }, {
      y: 0,
      name: '2003'
    }, {
      y: 0,
      name: '2004'
    }, {
      y: 0,
      name: '2005'
    }, {
      y: 0,
      name: '2006'
    }, {
      y: 1,
      name: '2007'
    }, {
      y: 0,
      name: '2008'
    }, {
      y: 0,
      name: '2009'
    }, {
      y: 0,
      name: '2010'
    }, {
      y: 0,
      name: '2011'
    }, {
      y: 0,
      name: '2012'
    }, {
      y: 0,
      name: '2013'
    }, {
      y: 0,
      name: '2014'
    }, {
      y: 0,
      name: '2015'
    }, {
      y: 0,
      name: '2016'
    }, {
      y: 0,
      name: '2017'
    }, {
      y: 0, 
      name: '2018'
    }, {
      y: 0, 
      name: '2019'
    }, {
      y: 0,
      name: '2020'
    }]
  }, {
    linkedTo: 'Failure/Partial Failure',
    color: '#f9bc65',
    stack: 'Falcon 9',
    data: [{
      y: 0,
      name: '2002'
    }, {
      y: 0,
      name: '2003'
    }, {
      y: 0,
      name: '2004'
    }, {
      y: 0,
      name: '2005'
    }, {
      y: 0,
      name: '2006'
    }, {
      y: 0,
      name: '2007'
    }, {
      y: 0,
      name: '2008'
    }, {
      y: 0,
      name: '2009'
    }, {
      y: 0,
      name: '2010'
    }, {
      y: 0,
      name: '2011'
    }, {
      y: 0,
      name: '2012'
    }, {
      y: 0,
      name: '2013'
    }, {
      y: 0,
      name: '2014'
    }, {
      y: 1,
      name: '2015'
    }, {
      y: 1,
      name: '2016'
    }, {
      y: 0,
      name: '2017'
    }, {
      y: 0, 
      name: '2018'
    }, {
      y: 0, 
      name: '2019'
    }, {
      y: 0,
      name: '2020'
    }]
  },

  {
      name: 'Heavy Success',
      color: '#5DB6D0',
      id: 'Heavy Success',
      stack: 'Delta IV',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 0,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 1,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 1,
        name: '2009'
      }, {
        y: 1,
        name: '2010'
      }, {
        y: 1,
        name: '2011'
      }, {
        y: 1,
        name: '2012'
      }, {
        y: 1,
        name: '2013'
      }, {
        y: 1,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 1,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 1, 
        name: '2018'
      }, {
        y: 1, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    }, {
      linkedTo: 'Heavy Success',
      color: '#5DB6D0',
      stack: 'Atlas V',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 0,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 0,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 0,
        name: '2009'
      }, {
        y: 0,
        name: '2010'
      }, {
        y: 0,
        name: '2011'
      }, {
        y: 0,
        name: '2012'
      }, {
        y: 0,
        name: '2013'
      }, {
        y: 0,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 0,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 0, 
        name: '2018'
      }, {
        y: 0, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    }, {
      linkedTo: 'Heavy Success',
      color: '#5DB6D0',
      stack: 'Falcon 9',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 0,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 0,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 0,
        name: '2009'
      }, {
        y: 0,
        name: '2010'
      }, {
        y: 0,
        name: '2011'
      }, {
        y: 0,
        name: '2012'
      }, {
        y: 0,
        name: '2013'
      }, {
        y: 0,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 0,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 1, 
        name: '2018'
      }, {
        y: 2, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    },

    {
      name: 'Heavy Failure/Partial Failure',
      color: '#D66E42',
      id: 'Heavy Failure/Partial Failure',
      stack: 'Delta IV',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 1,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 0,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 0,
        name: '2009'
      }, {
        y: 0,
        name: '2010'
      }, {
        y: 0,
        name: '2011'
      }, {
        y: 0,
        name: '2012'
      }, {
        y: 0,
        name: '2013'
      }, {
        y: 0,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 0,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 0, 
        name: '2018'
      }, {
        y: 0, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    }, {
      linkedTo: 'Heavy Failure/Partial Failure',
      color: '#D66E42',
      stack: 'Atlas V',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 0,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 0,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 0,
        name: '2009'
      }, {
        y: 0,
        name: '2010'
      }, {
        y: 0,
        name: '2011'
      }, {
        y: 0,
        name: '2012'
      }, {
        y: 0,
        name: '2013'
      }, {
        y: 0,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 0,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 0, 
        name: '2018'
      }, {
        y: 0, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    }, {
      linkedTo: 'Heavy Failure/Partial Failure',
      color: '#D66E42',
      stack: 'Falcon 9',
      data: [{
        y: 0,
        name: '2002'
      }, {
        y: 0,
        name: '2003'
      }, {
        y: 0,
        name: '2004'
      }, {
        y: 0,
        name: '2005'
      }, {
        y: 0,
        name: '2006'
      }, {
        y: 0,
        name: '2007'
      }, {
        y: 0,
        name: '2008'
      }, {
        y: 0,
        name: '2009'
      }, {
        y: 0,
        name: '2010'
      }, {
        y: 0,
        name: '2011'
      }, {
        y: 0,
        name: '2012'
      }, {
        y: 0,
        name: '2013'
      }, {
        y: 0,
        name: '2014'
      }, {
        y: 0,
        name: '2015'
      }, {
        y: 0,
        name: '2016'
      }, {
        y: 0,
        name: '2017'
      }, {
        y: 0, 
        name: '2018'
      }, {
        y: 0, 
        name: '2019'
      }, {
        y: 0,
        name: '2020'
      }]
    }

]});
