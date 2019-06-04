import * as d3 from 'd3'
import tooltip from './tooltip'

const chart = drawChart()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')

let windowWidth = window.innerWidth
let el

function resize() {
  const sz = Math.min(el.node().offsetWidth, window.innerHeight)
  chart.width(sz).height()
  el.call(chart)
}

function drawChart() {
  const margin = { top: 10, right: 10, bottom: 30, left: 30 }
  let width = 0
  let height = 0
  let inclinations

  let x = d3
    .scaleBand()
    .paddingOuter(0)
    .paddingInner(0.2)
    .align(0.5)

  let y = d3.scaleLinear()

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    const gEnter = svgEnter.append('g')
    gEnter.append('g').attr('class', 'axis axis--x')
    gEnter.append('g').attr('class', 'axis axis--y')
    gEnter.append('g').attr('class', 'g-plot')
  }

  function exit({ container, data }) {}

  function updateScales({ data }) {
    inclinations = data.map(d => d.inclination)
    const spaceportInclinations = data.filter(d => d.total > 0)
    const inclinationsMin = spaceportInclinations[0].inclination
    const inclinationsMax =
      spaceportInclinations[spaceportInclinations.length - 1].inclination
    inclinations = d3.range(inclinationsMin, inclinationsMax + 10, 10)

    x.domain(inclinations).rangeRound([0, width])

    y.domain(d3.extent(data.map(d => d.total)))
      .nice()
      .range([height, 0])
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

    const columns = plot.selectAll('.column').data(data)

    columns.exit().remove()

    columns
      .enter()
      .append('rect')
      .attr('class', 'column')
      .merge(columns)
      .attr('data-inclination', d => d.inclination)
      .attr('data-total', d => d.total)
      .attr('x', d => x(d.inclination))
      .attr('y', d => y(d.total))
      .attr('height', d => height - y(d.total))
      .attr('width', x.bandwidth())
      .on('mouseover', interactions.mouseover)
      .on('mouseleave', interactions.mouseleave)
  }

  function updateAxes({ container, data }) {
    // const ticks = inclinations.filter((d, i) => i % 2 == 0)
    let axisX = d3
      .axisBottom(x)
      // .tickValues(ticks)
      .tickFormat(t => t + '°')
      .tickSizeOuter(0)
    container
      .select('.axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(axisX)

    let yMax = y.domain()[1]
    let numTicks = 5
    if (yMax < 5) {
      numTicks = yMax
    }
    let axisY = d3
      .axisLeft(y)
      .ticks(numTicks)
      .tickFormat(d3.format(',.0f'))
      .tickSize(-width)
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
    height = width / 2
    return chart
  }

  const interactions = {
    mouseover(d) {
      interactions.tooltip(d)
      d3.selectAll('.column[data-inclination="' + d.inclination + '"]').classed(
        'is-active',
        true
      )
    },
    mouseleave(d) {
      interactions.tooltip(d, 'hide')
      d3.selectAll('.column[data-inclination="' + d.inclination + '"]').classed(
        'is-active',
        false
      )
    },
    tooltip(d, action = 'show') {
      if (action != 'show') {
        tooltip.hide()
        return
      }

      let tooltipContent = `
      <p>
      ${d.total} <span class="tooltip-label">primary payloads between</span> ${
        d.inclination
      }&deg; <span class="tooltip-label">and</span> ${d.inclination + 10}&deg;
      </p>`
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
