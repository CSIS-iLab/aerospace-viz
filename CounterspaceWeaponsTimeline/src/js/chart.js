// import * as d3 from 'd3'
const d3 = Object.assign(
  {},
  require('d3-selection'),
  require('d3-scale'),
  require('d3-axis'),
  require('d3-transition')
)
import tippy from 'tippy.js'
import { hideAll } from 'tippy.js'

tippy.setDefaultProps({
  allowHTML: true,
  trigger: 'mouseenter focus',
  animation: 'fade',
  hideOnClick: true,
  interactive: false,
  maxWidth: 215,
  theme: 'cpp',
  onMount(tip) {
    let close = document.querySelector('.tooltip-close')

    if (!close) return
    close.addEventListener('click', () => {
      tip.hide()
    })
  },
})

const tooltip = document.getElementById('tooltip')
let tooltipInstance

const chart = drawChart()

let el

// If needed, you can make modifications based on if you're viewing the chart on mobile or not.
let isMobile

// If  needed, declare any globally accessible variables you might need here to optimize selections
let rects

function resize() {
  const width = el.node().offsetWidth
  // const height = el.node().offsetHeight // Separately calculate the height if needed.

  chart.width(width)
  chart.height(width / 2)

  el.call(chart)
}

function drawChart() {
  const margin = { top: 25, right: 25, bottom: 25, left: 30 }
  let width
  let height

  let scaleX = d3.scaleBand().padding(0.1)
  let scaleY = d3.scaleLinear()

  let t

  /**
   *
   * Updates the scales based on the data. Whenever possible, make the scales data-driven so it can be future-proofed for when new data is added.
   *
   */

  function updateScales({ data }) {
    const countries = data.map((d) => d.country)

    scaleX.domain(countries).range([0, width])

    const max = Math.max(...data.map((d) => d.value))

    scaleY.domain([0, max]).range([height, 0]).nice()
  }

  /**
   *
   * Appends the SVG to the container. On updates, will make any necessary changes to width & height.
   *
   */

  function drawSVG({ container, data }) {
    container
      .selectAll('.chart')
      .data([data])
      .join((enter) =>
        enter
          .append('svg')
          .attr('class', 'chart')
          .call((enter) => {
            const g = enter
              .append('g')
              .attr('transform', `translate(${margin.left}, ${margin.top})`)

            g.append('g').attr('class', 'axis axis--x')
            g.append('g').attr('class', 'axis axis--y')
            g.append('g').attr('class', 'g-plot')
          })
      )
      .attr(
        'viewBox',
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )

    t = container.transition().duration(750)
  }

  /**
   *
   * Draw the main part of the chart: bars, lines, etc.
   *
   */

  function drawPlot({ container, data }) {
    const plot = container.select('.g-plot')

    const bandWidth = scaleX.bandwidth()

    rects = plot
      .selectAll('rect')
      .data(data, (d) => d.iso)
      .join(
        (enter) =>
          enter
            .append('rect')
            .attr('data-iso', (d) => d.iso)
            .attr('x', (d, i) => scaleX(d.country))
            .attr('y', (d) => scaleY(0))
            .attr('height', 0)
            .attr('width', bandWidth)
            .call((enter) =>
              enter
                .transition(t)
                .attr('y', (d) => scaleY(d.value))
                .attr('height', (d) => scaleY(0) - scaleY(d.value))
            ),
        (update) =>
          update.call((update) =>
            update
              .transition(t)
              .attr('y', (d) => scaleY(d.value))
              .attr('height', (d) => scaleY(0) - scaleY(d.value))
          )
      )
      .on('mouseover', interactions.mouseover)
      .on('mouseleave', interactions.mouseleave)
  }

  /**
   *
   * Draw any axes
   *
   */

  function drawAxes({ container, data }) {
    const xAxis = container.select('.axis--x')
    const yAxis = container.select('.axis--y')

    const xAxisGenerator = d3.axisBottom().scale(scaleX)
    xAxis
      .attr('transform', `translate(0, ${height})`)
      .transition(t)
      .call(xAxisGenerator)
      .selectAll('text')
      .attr('class', 'label')

    const yAxisGenerator = d3.axisLeft().scale(scaleY).tickSize(-width).ticks(5)
    yAxis.transition(t).call(yAxisGenerator)
  }

  const interactions = {
    mouseover(event, d) {
      rects.classed('is-faded', (r) => r.iso === d.iso)

      if (this._tippy) {
        this._tippy.setContent(interactions.setTooltipContent(d))
        return
      }

      tooltipInstance = tippy(this, {
        content: interactions.setTooltipContent(d),
      })
    },
    mouseleave(event, d) {
      hideAll({ duration: 0 })

      rects.classed('is-faded', false)
    },
    setTooltipContent(d) {
      const container = document.createElement('div')

      const values = ['country', 'dollars', 'amount']

      for (const value of values) {
        let content = d[value]

        tooltip.content.querySelector(
          `[data-value="${value}"]`
        ).innerHTML = content
      }

      const node = document.importNode(tooltip.content, true)

      container.appendChild(node)

      return container.innerHTML
    },
  }

  function chart(container) {
    const data = container.datum()

    updateScales({ data })
    drawSVG({ container, data })
    drawPlot({ container, data })
    drawAxes({ container, data })
  }

  chart.width = function (...args) {
    if (!args.length) return width
    width = args[0]
    return chart
  }

  chart.height = function (...args) {
    if (!args.length) return height
    height = args[0]
    return chart
  }

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  isMobile = args.isMobile

  resize()
}

export default { init }
