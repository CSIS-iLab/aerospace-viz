import * as d3 from 'd3'
import tooltip from './tooltip'
import MapZoom from './map-zoom'
import panel from './panel'
const WORLD_JSON = require('../data/world.json')

const chart = visual()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')
const colors = ['#d66e42', '#4b5255']

let windowWidth = window.innerWidth
let el
let spaceportsMeta
let categories
let maxTotal
let minTotal
let currentYear
let startYear

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
  let activePort

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

    const legendContainer = d3.select('.legend-size')
    const svgLegend = legendContainer.selectAll('.svg-size').data([data])
    const svgLegendEnter = svgLegend
      .enter()
      .append('svg')
      .attr('class', 'svg-size')
    const groupLegend = svgLegendEnter.append('g')
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
      .scale([width / (1.9 * Math.PI)])
      .rotate([rotated, 0])
      .translate([width / 2, height / 1.65])
    MapZoom.projection = projection

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
      .on('click', MapZoom.stopped, true)
      .call(MapZoom.zoom)

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
      .on('click', MapZoom.resetZoom)
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
      .merge(spaceports)
      .attr('cx', d => projection([d.longitude, d.latitude])[0])
      .attr('cy', d => projection([d.longitude, d.latitude])[1])
      .classed(
        'human-launched',
        d => d.human_launch_year != null && d.human_launch_year <= d.year
      )
      .on('mouseover', interactions.spaceports.mouseover)
      .on('mouseleave', interactions.spaceports.mouseleave)
      .on('click', interactions.spaceports.click)
      .transition(t)
      .attr('r', d => circleSize(d.ytd_total))
      .attr('fill', d => colorScale(d.status))
      .attr('stroke', d => colorScale(d.status))
  }

  function updateLegend({ container, data }) {
    if (!d3.select('.svg-size g *').empty()) {
      return
    }

    const legendWidth = 90
    const marginTop = legendWidth / 2 - 5
    const legendSVG = d3
      .select('.svg-size')
      .attr('width', legendWidth)
      .attr('height', legendWidth)

    const g = legendSVG
      .select('g')
      .attr(
        'transform',
        `translate(${circleSize.range()[1] + 1}, ${marginTop})`
      )

    const midPoint = circleSize.invert(
      (circleSize.range()[1] + circleSize.range()[0]) / 2
    )
    const legendData = [minTotal, midPoint, maxTotal]
    const circles = g.selectAll('circles').data(legendData)
    circles
      .enter()
      .append('circle')
      .attr('class', 'legend-size-circles')
      .merge(circles)
      .attr('data-value', d => d)
      .attr('cy', d => marginTop - circleSize(d))
      .attr('r', d => circleSize(d))

    const lines = g.selectAll('lines').data(legendData)
    lines
      .enter()
      .append('line')
      .attr('class', 'legend-size-line')
      .merge(lines)
      .attr('data-value', d => d)
      .attr('x1', 0)
      .attr('x2', d => circleSize.range()[1] + 5)
      .attr('y1', d => marginTop - circleSize(d) * 2)
      .attr('y2', d => marginTop - circleSize(d) * 2)

    const labels = g.selectAll('text').data(legendData)
    labels
      .enter()
      .append('text')
      .attr('class', 'legend-size-label')
      .merge(labels)
      .attr('data-value', d => d)
      .attr('x', d => circleSize.range()[1] + 5)
      .attr('y', d => marginTop - circleSize(d) * 2 + 3)
      .text(d => format(d))
  }

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    exit({ container, data })
    updateScales({ container, data })
    updateDom({ container, data })
    updateLegend({ container, data })
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0]
    height = width / 1.75
    return chart
  }

  const interactions = {
    spaceports: {
      mouseover(d) {
        interactions.spaceports.tooltip(d)
      },
      mouseleave(d) {
        interactions.spaceports.tooltip(d, 'hide')
      },
      click(d) {
        let item = d3.select(this)
        activePort = d.id
        panel.open()
        panel.updateInfo(d)
        MapZoom.zoomIn(item, d)
      },
      tooltip(d, action = 'show') {
        if (action != 'show') {
          tooltip.hide()
          return
        }

        let tooltipBody = [
          { Operator: d.operator },
          { ['Launches from ' + startYear + ' to ' + currentYear]: d.ytd_total }
        ]

        let tooltipContent = `
        <p class="tooltip-heading">
          ${d.name}</p>
          <span class="tooltip-label">Operator:</span> <span class="tooltip-value">${
            d.operator
          }</span><br />
          <span class="tooltip-label">Launches from ${startYear} to ${currentYear}:</span> <span class="tooltip-value">${d.ytd_total.toLocaleString()}</span>`
        tooltip.show(tooltipContent)
      }
    }
  }

  return chart
}

function setGlobals(args) {
  categories = args.categories
  minTotal = args.minTotal
  maxTotal = args.maxTotal
  startYear = args.startYear
  spaceportsMeta = args.spaceportsMeta
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  currentYear = args.currentYear
  resize(args)
}

export default { init, setGlobals }
