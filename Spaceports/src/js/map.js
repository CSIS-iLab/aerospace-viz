import * as d3 from 'd3'
import breakpoints from './breakpoints'
const WORLD_JSON = require('../data/world.json')

const chart = visual()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')

let windowWidth = window.innerWidth
let el

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
  // let zoom = d3
  //   .zoom()
  //   .scaleExtent([1, 8])
  //   .on('zoom', zoomed)

  const path = d3.geoPath().projection(projection)

  let size = d3.scaleQuantile()
  let circleSize = d3.scaleSqrt()
  let colorScale = d3.scaleQuantile()

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
    // let sortedValues = data.values.map(d => d.value).sort()
    // sortedValues.sort((a, b) => a - b)
    // circleSize.domain(d3.extent(Object.values(data.totals))).range([2, maxR])
    // size.domain(sortedValues).range([1, 2, 3, 4, 5])
    // colorScale
    //   .domain(sortedValues)
    //   .range(['#a483a8', '#3b75bb', '#83badc', '#58a897', '#8cb561'])
    // panel.colorScale = colorScale
  }

  function updateDom({ container, data }) {
    projection
      .scale([width / (1.9 * Math.PI)])
      .rotate([rotated, 0])
      .translate([width / 2, height / 1.65])

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
    // .on('click', stopped, true)
    // .call(zoom)
    // .on('wheel.zoom', null)

    const world = WORLD_JSON.features

    drawCountries({ container, world })
    // zoomBtns()
  }

  function updateLegend({ container, data }) {}

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
    height = width / 2
    return chart
  }

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  resize(args)
}

export default { init }
