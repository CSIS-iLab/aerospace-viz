// import * as d3 from 'd3'
const d3 = Object.assign(
  {},
  require('d3-selection')
)

const chart = drawChart()

let el

// If  needed, declare any globally accessible variables you might need here to optimize selections
let entries

function drawChart() {
  /**
   *
   * Draw the main part of the chart: bars, lines, etc.
   *
   */

  function drawPlot({ container, data }) {
    console.log(data)
    entries = container
      .selectAll('.timeline__entry')
      .data(data, (d) => d.id)
      .join('div')
      .attr('class', 'timeline__entry')
      .attr('data-id', (d) => d.id)
      .text(d => d.id)

    // Update the contents of the timeline entry div
    // details + summary for the details/source info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
  }

  function chart(container) {
    const data = container.datum()

    drawPlot({ container, data })
  }

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  el.call(chart)
}

export default { init }
