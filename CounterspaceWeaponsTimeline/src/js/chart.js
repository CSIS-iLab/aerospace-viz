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
      .join('li')
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
    let detailsIcon = ""

    let categoryDetailsIcon = d.category.replace(/\s+/g, '-').toLowerCase() + "-DetailsFlag"

    if (d.storyBool.toLowerCase() == "false" && d.learnMore.toLowerCase() == "false") {
      moreInfo = `<summary>Source</summary><div class="action__details-inner"><h2 class="action__source-label">Source</h2><p class="action__source">${d.source}</p></div>`
    } else {
      moreInfo = `<summary>Details</summary><div class="action__details-inner"><p class="action__details-body">STORY PLACEHOLDER Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod semper ante, eu bibendum ipsum feugiat nec. Quisque vel faucibus lectus. Nulla ultrices consequat mi non fermentum. Phasellus at placerat neque. Aliquam erat volutpat. Aenean magna urna, sodales semper dignissim non, pretium ut magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper tortor at est ultrices convallis. Aenean eu imperdiet felis. In pellentesque risus sed nulla mattis dignissim. Donec tincidunt, felis in auctor consequat, lorem purus vestibulum dui, vel euismod nisl dui sed enim. Vivamus eleifend, enim sed ultrices pellentesque, mi sapien pellentesque ante, feugiat porttitor odio erat finibus lacus. Nullam volutpat iaculis urna, nec fermentum nulla pretium a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><a href="${d.learnMoreURL}" class="action__details-link">Explore &#8594;</a><h2 class="action__source-label">Source</h2><p class="action__source">${d.source}</p></div>`
      detailsIcon = `<img src="${Img[categoryDetailsIcon]}" class="action__details-icon" />`
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
    ${detailsIcon}
    <img src="${Img[categoryIcon]}" class="action__icon" />
    <span class="action__year wp-caption-text">${actionDate}${actionEndDate}</span><span class="action__country wp-caption-text">${d.country}</span>
    <span class="action__category mobile-only">${d.category}</span>
    <h2 class="action__title entry-highlights-title">${d.title}</h2>
    <p class="action__type">${d.type}</p>
    <details class="action__details">${moreInfo}</details>
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
