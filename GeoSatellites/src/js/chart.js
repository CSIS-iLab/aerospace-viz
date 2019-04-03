import { geoPath, geoOrthographic } from 'd3-geo'
import { scaleLinear } from 'd3-scale'
import { select, selectAll } from 'd3-selection'
import { LightenDarkenColor } from './helpers'
import tooltip from './tooltip'
import * as topojson from 'topojson'

const chart = drawChart()

let el
let world
let worldProjection
let transitionDuration
let geoSatellitesData

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

  let projection = geoOrthographic()
  let globePath = geoPath()

  let width = 0
  let height = 0
  let radius = 3
  let perpRadius = 5

  let scaleX = scaleLinear()
  let scaleY = scaleLinear()

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    const gEnter = svgEnter.append('g')
    gEnter
      .append('g')
      .attr('class', 'g-orbit')
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', '#000')

    const earth = gEnter.append('g').attr('class', 'g-earth')
    earth
      .append('circle')
      .attr('class', 'water')
      .attr('fill', '#b7c7d1')

    earth
      .append('path')
      .attr('class', 'land')
      .style('fill', '#f2f1ee')
      .style('stroke', '#ccc')
      .style('stroke-width', '0.3px')

    gEnter.append('g').attr('class', 'g-geoSatellites')
    gEnter.append('g').attr('class', 'g-plot')
  }

  function updateScales({ data }) {
    scaleX
      .domain([defaultCoords.orbit.x.min, defaultCoords.orbit.x.max])
      .range([0, width])
    scaleY
      .domain([defaultCoords.orbit.y.min, defaultCoords.orbit.y.max])
      .range([height, 0])
  }

  function updateDom({ container, data, geoSatellitesData }) {
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

    // Earth
    let earth = g.select('.g-earth')

    const earthRadius = Math.abs(scaleY(defaultCoords.earth.y.max) - scaleY(0))

    projection
      .translate([scaleX(0), scaleY(0)])
      .scale(earthRadius)
      .rotate(worldProjection)
    globePath.projection(projection)

    earth
      .select('.water')
      .attr('cx', scaleX(0))
      .attr('cy', scaleY(0))
      .attr('r', projection.scale())

    earth
      .select('.land')
      .datum(topojson.feature(world, world.objects.countries))
      .attr('d', globePath)

    // GeoSatellites
    let geoSatellites = g
      .select('.g-geoSatellites')
      .selectAll('.satellite')
      .data(geoSatellitesData, d => d.sat_name)

    geoSatellites.join(
      enter =>
        enter
          .append('circle')
          .attr('class', 'satellite')
          .classed('satellite--perp', d => d.is_perp)
          .classed('satellite--geo', d => d.is_geo)
          .attr('r', radius)
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
    )

    // Satellites
    let satellites = g
      .select('.g-plot')
      .selectAll('.satellite')
      .data(data, d => d.sat_name)

    satellites.join(
      enter =>
        enter
          .append('circle')
          .attr('class', 'satellite')
          .classed('satellite--perp', d => d.is_perp)
          .classed('satellite--target', d => d.is_target)
          .attr('r', perpRadius)
          .attr('data-x', d => d.x_coord)
          .attr('data-y', d => d.y_coord)
          .attr(
            'transform',
            d => `translate(${scaleX(d.x_coord)}, ${scaleY(d.y_coord)})`
          )
          .on('mouseover', interactions.mouseover)
          .on('mouseleave', interactions.mouseleave),
      update =>
        update
          .attr('data-x', d => d.x_coord)
          .attr('data-y', d => d.y_coord)
          .call(update =>
            update
              .transition(transitionDuration)
              .attr(
                'transform',
                d => `translate(${scaleX(d.x_coord)}, ${scaleY(d.y_coord)})`
              )
          )
    )
  }

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    updateScales({ data })
    updateDom({ container, data, geoSatellitesData })
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

      // Remove the date from geoSatellites
      if (d.is_geo) {
        delete tooltipBody[1]
      }

      let tooltipContent = `
      <p class="tooltip-heading">
        ${d.sat_name}</p>
      ${tooltip.formatContent(tooltipBody, true)}`
      tooltip.show(tooltipContent)
    }
  }

  function drawEllipse({ cx, cy, rx, ry }) {
    cx = parseFloat(cx, 10)
    cy = parseFloat(cy, 10)
    rx = parseFloat(rx, 10)
    ry = parseFloat(ry, 10)

    const output2 = `
        M${cx - rx}, ${cy}
        a${rx}, ${ry} 0 1, 0 ${rx * 2}, 0
        a${rx}, ${ry} 0 1, 0 ${rx * -2}, 0
        `
    return output2
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0] - margin.left - margin.right
    return chart
  }

  chart.height = function(...args) {
    if (!args.length) return height
    height = args[0] - margin.top - margin.bottom
    perpRadius = height * 0.0174
    radius = height * 0.0117

    return chart
  }

  return chart
}

function init(args) {
  el = select(args.container)
  el.datum(args.data)
  transitionDuration = args.transitionDuration
  resize(args)
}

function setWorld(data, projection) {
  world = data
  worldProjection = projection
}

function setGeoSatellites(data) {
  geoSatellitesData = data
}

export default { init, setWorld, setGeoSatellites }
