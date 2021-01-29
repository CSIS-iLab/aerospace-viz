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
      moreInfo = `<summary>Source</summary><p class="source">${d.source}</p>`
    } else {
      moreInfo = `<summary>Details</summary><p>STORY PLACEHOLDER Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod semper ante, eu bibendum ipsum feugiat nec. Quisque vel faucibus lectus. Nulla ultrices consequat mi non fermentum. Phasellus at placerat neque. Aliquam erat volutpat. Aenean magna urna, sodales semper dignissim non, pretium ut magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper tortor at est ultrices convallis. Aenean eu imperdiet felis. In pellentesque risus sed nulla mattis dignissim. Donec tincidunt, felis in auctor consequat, lorem purus vestibulum dui, vel euismod nisl dui sed enim. Vivamus eleifend, enim sed ultrices pellentesque, mi sapien pellentesque ante, feugiat porttitor odio erat finibus lacus. Nullam volutpat iaculis urna, nec fermentum nulla pretium a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><a href="${d.learnMoreURL}">Explore &#8594;</a><p class="source">${d.source}</p>`
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
    <li>
    <img src="${Img[categoryIcon]}" class="action__icon" />
    <span class="action__year">${actionDate}${actionEndDate}</span><span class="action__country"> ${d.country}</span>
    <span class="action__category mobile-only">${d.category}</span>
    <h2 class="action__title">${d.title}</h2>
    <p class="action__type">${d.type}</p>
    <details class="action__details">${moreInfo}</details>
    </li>
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
