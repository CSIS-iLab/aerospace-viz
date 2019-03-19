import breakpoints from './js/breakpoints'
import Chart from './js/chart'
import timeline from './js/timeline'
import parseData from './js/data'
import 'nouislider/distribute/nouislider.min.css'
import './scss/main.scss'

const satelliteFile = './data/20190318-china.csv'
const targetsFile = './data/20190318-china-targets.csv'

const transitionDuration = 25

let data
let currentDate
let startDate
let endDate

function init() {
  loadData()
}

async function loadData() {
  data = await parseData(satelliteFile, targetsFile)

  let dates = Array.from(data.keys())
  startDate = dates[0]
  endDate = dates[dates.length - 1]
  currentDate = startDate

  setupTimeline()
  drawChart()
  hideLoading()
}

function drawChart() {
  currentDate = timeline.getCurrentDate()

  let dataset = data.get(currentDate)

  Chart.init({
    data: dataset,
    container: '.chart'
  })
}

function setupTimeline() {
  timeline.transitionDuration = transitionDuration

  timeline.setupTimeline({
    startDate: startDate,
    endDate: endDate,
    current: currentDate,
    transitionDuration: transitionDuration,
    onChange: function() {
      drawChart()
      timeline.updateCurrentDate(currentDate)
      if (currentDate == endDate) {
        timeline.stopTimeline()
      }
    }
  })
}

// function resizeChart() {
//   let newBreakpoint = breakpoints.calculate()

//   if (breakpoint != newBreakpoint) {
//     breakpoint = newBreakpoint
//     drawChart()
//   }
// }

function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none'
  document
    .querySelectorAll('.hide-on-load')
    .forEach(el => el.classList.remove('hide-on-load'))
}

window.addEventListener('DOMContentLoaded', init)
// window.addEventListener('resize', resizeChart)
