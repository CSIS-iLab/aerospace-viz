import * as d3 from 'd3'
import tooltip from './tooltip'

const chart = drawChart()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')
const formatPercentage = d3.format(',.2%')

let windowWidth = window.innerWidth
let el
const categories = ['LEO', 'MEO', 'GEO', 'other', 'missing']

function resize() {
  const sz = Math.min(el.node().offsetWidth, window.innerHeight)
  chart.width(sz).height()
  el.call(chart)
}

function drawChart() {
  const margin = { top: 10, right: 10, bottom: 30, left: 30 }
  let width = 0
  let height = 0
  let years

  let x = d3
    .scaleBand()
    .paddingOuter(0)
    .paddingInner(0.2)
    .align(0.5)

  let y = d3.scaleLinear()

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    svgEnter.append('rect').attr('class', 'rect')
    const gEnter = svgEnter.append('g')
    gEnter.append('g').attr('class', 'g-plot')
    gEnter.append('g').attr('class', 'axis axis--x')
    gEnter.append('g').attr('class', 'axis axis--y')
    gEnter.append('g').attr('class', 'legend')
  }

  function exit({ container, data }) {}

  function updateScales({ data }) {
    years = data.map(d => d.year)

    x.domain(years).rangeRound([0, width])

    y.domain(d3.extent(data.map(d => d.total)))
      .nice()
      .rangeRound([height, 0])
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
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    let plot = g.select('.g-plot')

    let stack = d3.stack().keys(categories)

    categories.forEach(function(key, key_index) {
      var bar = plot
        .selectAll('.bar-' + key)
        .data(stack(data)[key_index], d => d.data.year + '-' + key)

      bar.exit().remove()

      bar
        .enter()
        .append('rect')
        .attr('class', d => 'bar bar-' + key)
        .attr('data-year', d => d.data.year)
        .attr('x', d => x(d.data.year))
        .attr('y', height)
        .on('mouseover', interactions.mouseover)
        .on('mouseleave', interactions.mouseleave)
        .merge(bar)
        .transition()
        .attr('x', d => x(d.data.year))
        .attr('y', d => y(d[1]))
        .attr('height', d => y(d[0]) - y(d[1]))
        .attr('width', x.bandwidth())
    })
  }

  function updateAxes({ container, data }) {
    let ticks = years.filter((y, i) => i % 5 == 0)
    let axisX = d3
      .axisBottom(x)
      .tickValues(ticks)
      .tickSizeOuter(0)
    container
      .select('.axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(axisX)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '-.5em')
      .attr('transform', 'rotate(-90)')

    let yMax = y.domain()[1]
    let numTicks = 5
    if (yMax < 5) {
      numTicks = yMax
    }
    let axisY = d3
      .axisLeft(y)
      .ticks(numTicks)
      .tickFormat(d3.format(',.0f'))
      .tickSizeOuter(0)

    container
      .select('.axis--y')
      .call(axisY)
      .append('text')
      .attr('x', 2)
      .attr('y', y(y.ticks().pop()) + 0.5)
      .attr('dy', '0.32em')
      .attr('fill', '#000')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start')
  }

  function updateLegend({ container, data }) {
    const legend = d3.select('.barchart-legend')

    const items = legend.selectAll('.legend-item').data(categories)

    items
      .enter()
      .append('li')
      .attr('class', 'legend-item')
      .attr('data-orbit', d => d)
      .text(d => d)
  }

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    exit({ container, data })
    updateScales({ container, data })
    updateDom({ container, data })
    updateAxes({ container, data })
    updateLegend({ container, data })
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0]
    return chart
  }

  chart.height = function() {
    height = width / 2
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
