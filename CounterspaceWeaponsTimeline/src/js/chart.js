// import * as d3 from 'd3'
const d3 = Object.assign({}, require('d3-selection'))
import Img from '../img/css-icons/*.svg'

console.log(Img)

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

    let actionDate
    let actionEndDate
    const monthNames = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ]

    if (!d.startDate) {
      actionDate = d.startYear
    } else {
      actionDate = formatDate(d.startDate)
    }

    if (!d.endDate && !d.endYear) {
      actionEndDate = ''
    } else if (!d.endDate) {
      actionEndDate = ' - ' + d.endYear
    } else {
      actionEndDate = ' - ' + formatDate(d.endDate)
    }

    function formatDate(dateIn) {
      let offDate = new Date(dateIn)
      let month = monthNames[offDate.getUTCMonth()]
      let day = offDate.getUTCDate()
      let year = offDate.getUTCFullYear()

      if (day > 1) {
        return month + ' ' + day + ', ' + year
      } else {
        return month + ' ' + year
      }
    }

    let categoryIcon = d.category.replace(/\s+/g, '-').toLowerCase()

    return `
    <img src="${Img[categoryIcon]}" />
    <span class="action-year">${actionDate}${actionEndDate}</span><span class="action-country"> ${d.country}</span>
    <span class="action-category mobile-only">${d.category}</span>
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
