import breakpoints from './js/breakpoints'
import Chart from './js/chart'
import timeline from './js/timeline'
import { getData, getWorldData } from './js/data'

const transitionDuration = 25

let breakpoint = breakpoints.calculate()
let data
let world
let currentDate
let startDate
let endDate

async function loadData(satelliteFile, targetsFile) {
  data = await getData(satelliteFile, targetsFile)

  world = await getWorldData()
  Chart.setWorld(world)

  let dates = Array.from(data.keys())
  startDate = dates[0]
  endDate = dates[dates.length - 1]
  currentDate = startDate

  // Setting up the timeline will call the first drawChart()
  setupTimeline()
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

function resizeChart() {
  let newBreakpoint = breakpoints.calculate()

  if (breakpoint != newBreakpoint) {
    breakpoint = newBreakpoint
    drawChart()
  }
}

function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none'
  document
    .querySelectorAll('.hide-on-load')
    .forEach(el => el.classList.remove('hide-on-load'))
}

window.addEventListener('resize', resizeChart)

export default loadData
