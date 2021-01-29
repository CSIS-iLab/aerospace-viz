// import * as d3 from 'd3'
const d3 = Object.assign({}, require('d3-selection'))
import Img from '../img/css-icons/*.svg'


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
      return a.dates - b.dates
    })

    // Generates id of entries for first appearance of a year
    let firstOfYearIds = {}
    const years = [...new Set(data.map((d) => d.year))].forEach((year) => {
      let entry = data.find((d) => d.year === year)
      firstOfYearIds[entry.id] = true
    })

    entries = container
      .selectAll('.timeline__entry')
      .data(data, (d) => d.id)
      .join('div')
      .attr('class', 'timeline__entry')
      .classed('is-first-of-year', (d) => firstOfYearIds[d.id])
      .attr('data-id', (d) => d.id)
      .attr('data-year', (d) => d.year)
      .html((d) => generateTimelineEntry(d))
  }

  function generateTimelineEntry(d) {
    // Update the contents of the timeline entry div
    // details + summary for the details/source info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

    let moreInfo

    if (d.storyBool.toLowerCase() == "false" && d.learnMore.toLowerCase() == "false") {
      moreInfo = `<summary>Source</summary><div>${d.source}</div>`
    } else {
      moreInfo = `<summary>Details</summary><div>${d.source}</div>`
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
    <details>${moreInfo}</details>
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
