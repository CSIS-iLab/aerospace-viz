import * as d3 from 'd3'
import breakpoints from './breakpoints'
import MapZoom from './map-zoom'
const WORLD_JSON = require('../data/world.json')

const chart = visual()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')
const colors = ['#d66e42', '#4b5255']

let windowWidth = window.innerWidth
let el
let categories
let maxTotal
let minTotal

function resize() {
  const sz = Math.min(el.node().offsetWidth)
  chart.width(sz)
  el.call(chart)
}

function visual() {
  // Margins, width, height, data
  const margin = { top: 0, right: 10, bottom: 0, left: 10 }
  const maxR = 30
  let width = 0
  let height = 0
  let initX
  let mouseClicked = false
  let s = 1
  let rotated = -3
  let mouse // need to store this because on zoom end, using mousewheel, mouse position is NAN

  let projection = d3.geoMercator()
  let zoom = d3
    .zoom()
    .scaleExtent([1, 8])
    .on('zoom', MapZoom.zoomed)
  MapZoom.zoom = zoom

  const path = d3.geoPath().projection(projection)

  let circleSize = d3.scaleSqrt()
  let colorScale = d3.scaleOrdinal()

  function enter({ container, data }) {
    const svg = container.selectAll('.svg-map').data([data])
    const svgEnter = svg
      .enter()
      .append('svg')
      .attr('class', 'svg-map')
    const group = svgEnter.append('g').attr('class', 'g-container')
    group.append('rect').attr('class', 'map-background')
    group.append('g').attr('class', 'g-map')
    group.append('g').attr('class', 'g-plot')
  }

  function exit({ container, data }) {}

  function updateScales({ data }) {
    circleSize.domain([minTotal, maxTotal]).range([2, maxR])
    colorScale.domain(categories).range(colors)
  }

  function updateDom({ container, data }) {
    MapZoom.width = width
    MapZoom.height = height
    projection
      .scale([width / (2.3 * Math.PI)])
      .rotate([rotated, 0])
      .translate([width / 1.8, height / 1.65])

    // Set SVG attributes, add items
    let svg = container
      .select('.svg-map')
      .attr(
        'viewBox',
        '0 0 ' +
          (width + margin.left + margin.right) +
          ' ' +
          (height + margin.top + margin.bottom)
      )
      .attr('preserveAspectRatio', 'xMinYMin')
      .on('click', stopped, true)
      .call(MapZoom.zoom)
    // .on('wheel.zoom', null)

    const world = WORLD_JSON.features

    drawCountries({ container, world })
    drawSpaceports({ container, data })
    MapZoom.setupBtns()
  }

  function drawCountries({ container, world }) {
    container
      .select('.g-map')
      .selectAll('.country')
      .data(world)
      .enter()
      .append('path')
      .attr('class', d => {
        if (d.geometry.type == 'Point') {
          return 'country point'
        }
        return 'country'
      })
      .attr('d', path)
      .attr('id', d => d.id)

    let map = container
      .select('.g-map')
      .node()
      .getBBox()
    container
      .select('.map-background')
      .attr('width', map.width)
      .attr('height', map.height)
      .attr('transform', 'translate(' + map.x + ', 0)')
    // .on('click', resetZoom)
  }

  function drawSpaceports({ container, data }) {
    const plot = container.select('.g-plot')

    const spaceports = plot.selectAll('.spaceport').data(data, d => d.id)

    spaceports.exit().remove()

    spaceports
      .enter()
      .append('circle')
      .attr('class', 'spaceport')
      .attr('data-id', d => d.id)
      .attr('cx', d => projection([d.longitude, d.latitude])[0])
      .attr('cy', d => projection([d.longitude, d.latitude])[1])
      .merge(spaceports)
      .classed(
        'human-launched',
        d => d.human_launch_year != null && d.human_launch_year <= d.year
      )
      .transition(t)
      .attr('r', d => circleSize(d.ytd_total))
      .attr('fill', d => colorScale(d.status))
      .attr('stroke', d => colorScale(d.status))

    // const label = plot.selectAll('.label').data(data)
    // label
    //   .enter()
    //   .append('text')
    //   .attr('class', 'label')
    //   .attr('fill', 'black')
    //   .attr('font-size', '9px')
    //   .attr('x', d => projection([d.longitude, d.latitude])[0])
    //   .attr('y', d => projection([d.longitude, d.latitude])[1] - 5)
    //   .text(d => d.name)
  }

  function updateLegend({ container, data }) {}

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    exit({ container, data })
    updateScales({ container, data })
    updateDom({ container, data })
    updateLegend({ container, data })
  }

  function stopped() {
    if (d3.event.defaultPrevented) d3.event.stopPropagation()
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0]
    height = width / 1.75
    return chart
  }

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  categories = args.categories
  minTotal = args.minTotal
  maxTotal = args.maxTotal
  resize(args)
}

export default { init }
