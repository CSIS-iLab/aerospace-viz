const d3 = Object.assign({}, require('d3-selection'))
import Img from '../img/css-icons/*.svg'

let url = ''

if (window.location.href.indexOf('aerospace') != -1) {
  url =
    'https://csis-ilab.github.io/aerospace-viz/CounterspaceWeaponsTimeline/dist/'
}

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

    let timeline = document.querySelector('#interactive__timeline')
    if (data.length == 0) {
      let div = document.createElement('div')
      div.className = 'no-results'
      div.innerHTML =
        'No results found. Please change your selections and try again.'
      timeline.appendChild(div)
      timeline.classList.add('interactive__timeline--no-results')
    } else {
      let noResults = document.querySelector('.no-results')
      if (noResults != null) {
        noResults.remove()
        timeline.classList.remove('interactive__timeline--no-results')
      }
    }

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
      .classed('has-story', (d) => d.storyBool)
      .attr('data-id', (d) => d.id)
      .attr('data-year', (d) => d.year)
      .html((d) => generateTimelineEntry(d))

    let actions = document.querySelectorAll('.timeline__entry')

    if (data.length > 0) {
      let previousYear = data[0].year
      actions.forEach((action) => {
        let actionYear = action.attributes['data-year'].value
        if (actionYear - previousYear > 1) {
          let gapDiv = document.createElement('div')
          gapDiv.className = 'year-gap'
          action.appendChild(gapDiv)
          action.classList.add('year-gap-margin')
        }
        previousYear = actionYear
      })
    }
  }

  function generateTimelineEntry(d) {
    let categoryName = d.category.replace(/\s+/g, '-').toLowerCase()
    let categoryDetailsIcon = categoryName + '-DetailsFlag'
    let categoryIcon = d.category.replace(/\s+/g, '-').toLowerCase()

    let btnLabel = 'Source'
    let learnMore = ''
    let storyInfo = ''
    let detailsIcon = ''
    let detailsImage = ''

    if (d.imageURL) {
      detailsImage = `<img src="${url}${d.imageURL}" class="action__details-image" />`
    }

    if (d.storyBool) {
      btnLabel = 'Read More'
      detailsIcon = `<img src="${url}${Img[categoryDetailsIcon]}" class="action__details-icon" />`
      storyInfo = `<div class="action__details-body">${d.story}</div>${detailsImage}`
    }

    if (d.learnMore) {
      learnMore = `<a href="${d.learnMoreURL}" class="action__details-link" target="_blank">Explore &#8594;</a>`
    }

    const sourceInfo = `<h2 class="action__source-label">Source</h2><p class="action__source">${d.source}</p>`

    const moreInfo = `
      <summary><span class="sr-only">${btnLabel}</span></summary>
      <div class="action__details-inner">
        ${storyInfo}
        ${learnMore}
        ${sourceInfo}
      </div>
    `

    let actionDate
    let actionEndDate

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

    return `
    <div class="timeline__entry-inner">
      <div class="timeline__entry-grid ${categoryName}">
        ${detailsIcon}
        <img src="${url}${Img[categoryIcon]}" class="action__icon" />
        <span class="action__year wp-caption-text">${actionDate}${actionEndDate}</span><span class="action__country wp-caption-text">${d.country}</span>
        <span class="action__category mobile-only ${categoryName}">${d.category}</span>
        <h2 class="action__title entry-highlights-title">${d.title}</h2>
        <p class="action__type">${d.type}</p>
        <div class="action__details-trigger" aria-hidden="true">${btnLabel}</div>
      </div>
      <details class="action__details">${moreInfo}</details>
    </div>
    `
  }

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
