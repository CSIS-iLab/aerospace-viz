// import * as d3 from 'd3'
const d3 = Object.assign({}, require('d3-selection'))

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

    data.sort(function (a, b) {
      return b.dates - a.dates
    })

    entries = container
      .selectAll('.timeline__entry')
      .data(data, (d) => d.id)
      .join('div')
      .attr('class', 'timeline__entry')
      .attr('data-id', (d) => d.id)
      .html((d) => generateTimelineEntry(d))
  }

  function generateTimelineEntry(d) {
    // Update the contents of the timeline entry div
    // details + summary for the details/source info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

    if (!d.startDate) {
      d.dates = new Date(d.startYear, 0, 1)
    } else {
      d.dates = new Date(d.startDate)
    }


    let actionDate;
    let actionEndDate
    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
      "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];

    if (!d.startDate) {
      actionDate = d.startYear
    } else {
      let offDate = new Date(d.startDate)
      let month = monthNames[offDate.getUTCMonth()]
      let day = offDate.getUTCDate()
      let year = offDate.getUTCFullYear()
      if (day > 1) {
        actionDate = month + " " + day + ", " + year
      } else {
        actionDate = month + " " + year
      }
    }

    if (!d.endDate && !d.endYear) {
      actionEndDate = ""
    } else if (!d.endDate) {
      actionEndDate = " - " + d.endYear
    } else {
      let offEndDate = new Date(d.endDate)
      let month = monthNames[offEndDate.getUTCMonth()]
      let day = offEndDate.getUTCDate()
      let year = offEndDate.getUTCFullYear()
      if (day > 1) {
        actionEndDate = " - " + month + " " + day + ", " + year
      } else {
        actionEndDate = " - " + month + " " + year
      }
    }

    return `
    <span class="action-year">${actionDate}${actionEndDate}</span><span class="action-country"> ${d.country}</span>
    <h2 class="action-title">${d.title}</h2>
    <p class="action-type">${d.type}</p>
    `
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
