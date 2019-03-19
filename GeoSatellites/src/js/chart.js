import { scaleLinear } from 'd3-scale'
import { select, selectAll } from 'd3-selection'
import { LightenDarkenColor } from './helpers'
import tooltip from './tooltip'

const chart = drawChart()

let el

function resize() {
  const sz = Math.min(el.node().offsetWidth, window.innerHeight)
  chart.width(sz).height(sz / 3)
  el.call(chart)
}

function drawChart() {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const defaultCoords = {
    orbit: {
      x: {
        min: -1,
        max: 1
      },
      y: {
        min: -0.309,
        max: 0.309
      }
    },
    earth: {
      x: {
        min: -0.151,
        max: 0.151
      },
      y: {
        min: -0.151,
        max: 0.151
      }
    }
  }
  const colors = {
    China: '#d66e42',
    Russia: '#196c95',
    US: '#f9bc65',
    Other: '#b5bdc1'
  }
  let width = 0
  let height = 0

  let scaleX = scaleLinear().domain([
    defaultCoords.orbit.x.min,
    defaultCoords.orbit.x.max
  ])
  let scaleY = scaleLinear().domain([
    defaultCoords.orbit.y.min,
    defaultCoords.orbit.y.max
  ])

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    const gEnter = svgEnter.append('g')
    gEnter.append('g').attr('class', 'g-earth')
    gEnter.append('g').attr('class', 'g-plot')
  }

  function updateScales({ data }) {
    scaleX.range([0, width])
    scaleY.range([height, 0])
  }

  function updateDom({ container, data }) {
    let svg = container
      .select('svg')
      // .attr('width', width + margin.left + margin.right)
      // .attr('height', height + margin.top + margin.bottom)
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

    // Earth
    let earth = g.select('.g-earth')

    if (earth.select('*').empty()) {
      const earthRadius = Math.abs(
        scaleY(defaultCoords.earth.y.max) - scaleY(0)
      )
      earth
        .append('circle')
        .attr('cx', scaleX(0))
        .attr('cy', scaleY(0))
        .attr('r', earthRadius)
        .attr('fill', 'lightgray')

      earth
        .append('circle')
        .attr('cx', scaleX(defaultCoords.earth.x.min))
        .attr('cy', scaleY(0))
        .attr('r', 1)
        .attr('fill', 'red')

      earth
        .append('circle')
        .attr('cx', scaleX(defaultCoords.earth.x.max))
        .attr('cy', scaleY(0))
        .attr('r', 1)
        .attr('fill', 'red')

      earth
        .append('circle')
        .attr('cy', scaleY(defaultCoords.earth.y.min))
        .attr('cx', scaleX(0))
        .attr('r', 1)
        .attr('fill', 'red')

      earth
        .append('circle')
        .attr('cy', scaleY(defaultCoords.earth.y.max))
        .attr('cx', scaleX(0))
        .attr('r', 1)
        .attr('fill', 'red')
    }

    let plot = g.select('.g-plot')

    let satellites = plot.selectAll('.satellite').data(data, d => d.sat_name)

    satellites.join(
      enter =>
        enter
          .append('circle')
          .attr('class', 'satellite')
          .attr('r', 5)
          .attr('fill', d => colors[d.country])
          .attr('stroke', d => LightenDarkenColor(colors[d.country], -20))
          .attr('fill-opacity', 0.8)
          .attr('cx', d => scaleX(d.x_coord))
          .attr('cy', d => scaleY(d.y_coord))
          .attr('data-x', d => d.x_coord)
          .attr('data-y', d => d.y_coord)
          .on('mouseover', interactions.mouseover)
          .on('mouseleave', interactions.mouseleave),
      update =>
        update
          .attr('cx', d => scaleX(d.x_coord))
          .attr('cy', d => scaleY(d.y_coord))
          .attr('data-x', d => d.x_coord)
          .attr('data-y', d => d.y_coord)
    )
  }

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    updateScales({ data })
    updateDom({ container, data })
  }

  const interactions = {
    mouseover(d) {
      interactions.showTooltip(d)
      select(this).classed('is-active', true)
    },
    mouseleave() {
      tooltip.hide()
      select(this).classed('is-active', false)
    },
    showTooltip(d) {
      let tooltipBody = [
        { Operator: d.sat_operator },
        { Date: d.timestamp },
        { Longitude: d.long_string }
      ]

      let tooltipContent = `
      <p class="tooltip-heading">
        ${d.sat_name}</p>
      ${tooltip.formatContent(tooltipBody, true)}`
      tooltip.show(tooltipContent)
    }
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0] - margin.left - margin.right
    return chart
  }

  chart.height = function(...args) {
    if (!args.length) return height
    height = args[0] - margin.top - margin.bottom

    return chart
  }

  return chart
}

function init(args) {
  el = select(args.container)
  el.datum(args.data)
  resize(args)
}

export default { init }
