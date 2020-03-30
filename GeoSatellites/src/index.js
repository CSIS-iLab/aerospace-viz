import breakpoints from './js/breakpoints'
import Chart from './js/chart'
import SpeedControls from './js/speed-controls'
import timeline from './js/timeline'
import { getData, getWorldData } from './js/data'

const baseSpeed = 200

const speeds = {
  half: baseSpeed * 2,
  '1x': baseSpeed,
  '2x': baseSpeed / 2
}

let breakpoint = breakpoints.calculate()
let data
let world
let currentDate
let startDate
let endDate
let currentSpeed = '1x'
let transitionDuration = speeds[currentSpeed]

async function loadData(
  satelliteFile,
  satelliteName,
  satelliteCountry,
  worldProjection
) {
  data = await getData(satelliteFile)

  world = await getWorldData()
  Chart.setWorld(world, worldProjection)

  let dates = Array.from(data.perp.keys())
  startDate = dates[0]
  endDate = dates[dates.length - 1]
  currentDate = startDate

  updateSatelliteNames(satelliteName, satelliteCountry)

  // Setting up the timeline will initiate drawChart()
  setupSpeedControls()
  setupTimeline()
  hideLoading()
}

function drawChart() {
  currentDate = timeline.getCurrentDate()
  let dataset = data.perp.get(currentDate)

  Chart.init({
    data: dataset,
    transitionDuration,
    container: '.chart'
  })
}

function setupSpeedControls() {
  SpeedControls.init({
    currentSpeed,
    onClick: function(e) {
      timeline.stopTimeline()
      Array.from(SpeedControls.btns).forEach(el =>
        el.classList.remove('is-active')
      )
      this.classList.add('is-active')
      currentSpeed = SpeedControls.getCurrentSpeed()
      transitionDuration = speeds[currentSpeed]
      timeline.transitionDuration = transitionDuration
      timeline.startTimeline()
    }
  })
}

function setupTimeline() {
  timeline.transitionDuration = transitionDuration

  timeline.setupTimeline({
    startDate: startDate,
    endDate: endDate,
    transitionDuration: transitionDuration,
    onUpdate: function(values, handle) {
      drawChart()
      timeline.updateCurrentDate(currentDate)
      if (currentDate == endDate) {
        timeline.stopTimeline()
      }
    }
  })
}

function updateSatelliteNames(name, country) {
  Array.from(document.querySelectorAll('.satellite-name')).forEach(el => {
    el.textContent = name
  })

  Array.from(document.querySelectorAll('.satellite-country')).forEach(el => {
    el.textContent = country
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
