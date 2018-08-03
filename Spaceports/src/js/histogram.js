import * as d3 from 'd3'
import tooltip from './tooltip'
import scaleRadial from './scale-radial'

const chart = drawChart()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')

let windowWidth = window.innerWidth
let el

function resize() {
  const sz = Math.min(el.node().offsetWidth, window.innerHeight)
  chart
    .width(sz)
    .height()
    .outerRadius()
  el.call(chart)
}

function drawChart() {
  const margin = { top: 10, right: 10, bottom: 30, left: 30 }
  let width = 0
  let height = 0
  let inclinations
  const innerRadius = 125
  let outerRadius

  let x = d3
    .scaleBand()
    .range([0, Math.PI])
    .align(0)

  let y = scaleRadial()

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    const gEnter = svgEnter.append('g')
    gEnter.append('g').attr('class', 'g-plot')
    gEnter.append('g').attr('class', 'axis axis--x')
    gEnter.append('g').attr('class', 'axis axis--y')
  }

  function exit({ container, data }) {}

  function updateScales({ data }) {
    inclinations = data.map(d => d.inclination)

    x.domain(inclinations)

    y.domain(d3.extent(data.map(d => d.total))).range([0, innerRadius])
  }

  function updateDom({ container, data }) {
    let svg = container
      .select('svg')
      .attr(
        'viewBox',
        '0 0 ' +
          (width + margin.left + margin.right) +
          ' ' +
          (height + margin.top + margin.bottom)
      )

    let g = svg
      .select('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    let plot = g.select('.g-plot')

    const arc = d3
      .arc()
      .padAngle(0.01)
      .padRadius(innerRadius)

    const columns = plot.selectAll('.column').data(data)

    columns.exit().remove()

    columns
      .enter()
      .append('path')
      .attr('class', 'column')
      .merge(columns)
      .each(d => {
        d.innerRadius = 0
        d.outerRadius = y(d.total)
        d.startAngle = x(d.inclination)
        d.endAngle = x(d.inclination) + x.bandwidth()
      })
      .attr('data-inclination', d => d.inclination)
      .attr('data-total', d => d.total)
      .attr('fill', 'steelblue')
      .attr('d', arc)
  }

  function updateAxes({ container, data }) {
    // let ticks = years.filter((y, i) => i % 5 == 0)
    // let axisX = d3
    //   .axisBottom(x)
    //   .tickValues(ticks)
    //   .tickSizeOuter(0)
    // container
    //   .select('.axis--x')
    //   .attr('transform', 'translate(0,' + height + ')')
    //   .call(axisX)
    //   .selectAll('text')
    //   .style('text-anchor', 'end')
    //   .attr('dx', '-.8em')
    //   .attr('dy', '-.5em')
    //   .attr('transform', 'rotate(-90)')
    // let yMax = y.domain()[1]
    // let numTicks = 5
    // if (yMax < 5) {
    //   numTicks = yMax
    // }
    // let axisY = d3
    //   .axisLeft(y)
    //   .ticks(numTicks)
    //   .tickFormat(d3.format(',.0f'))
    //   .tickSizeOuter(0)
    // container
    //   .select('.axis--y')
    //   .call(axisY)
    //   .append('text')
    //   .attr('x', 2)
    //   .attr('y', y(y.ticks().pop()) + 0.5)
    //   .attr('dy', '0.32em')
    //   .attr('fill', '#000')
    //   .attr('font-weight', 'bold')
    //   .attr('text-anchor', 'start')
  }

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    exit({ container, data })
    updateScales({ container, data })
    updateDom({ container, data })
    updateAxes({ container, data })
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0]
    return chart
  }

  chart.height = function() {
    height = width
    return chart
  }

  chart.outerRadius = function() {
    outerRadius = Math.min(width, height) / 2
    return chart
  }

  const interactions = {
    mouseover(d) {
      interactions.tooltip(d)
      d3.selectAll('.bar[data-year="' + d.data.year + '"]').classed(
        'is-active',
        true
      )
    },
    mouseleave(d) {
      interactions.tooltip(d, 'hide')
      d3.selectAll('.bar[data-year="' + d.data.year + '"]').classed(
        'is-active',
        false
      )
    },
    tooltip(d, action = 'show') {
      if (action != 'show') {
        tooltip.hide()
        return
      }

      let tooltipBody = []
      categories.forEach(category => {
        tooltipBody.push({
          [category]: d.data[category],
          class: [category]
        })
      })

      let tooltipContent = `
      <p class="tooltip-heading">
        ${d.data.year} Total Launches: ${d.data.total}</p>
        ${tooltip.formatContent(tooltipBody, true)}`
      tooltip.show(tooltipContent)
    }
  }

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  resize(args)
}

export default { init }
