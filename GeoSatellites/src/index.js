import breakpoints from './js/breakpoints'
import Chart from './js/chart'
import TextDescription from './js/text-description'
import timeline from './js/timeline'
import { getData, getWorldData } from './js/data'

const transitionDuration = 300

let breakpoint = breakpoints.calculate()
let data
let description
let descriptionDates
let world
let currentDate
let startDate
let endDate

async function loadData(satelliteFile, targetsFile, text) {
  description = TextDescription.convertKeys(text)
  descriptionDates = Object.keys(description).map(d => +d)

  data = await getData(satelliteFile, targetsFile)

  world = await getWorldData()
  Chart.setWorld(world)

  console.log(data)

  let dates = Array.from(data.keys())
  startDate = dates[0]
  endDate = dates[dates.length - 1]
  currentDate = startDate

  // Setting up the timeline will initiate drawChart()
  setupTimeline()
  hideLoading()
}

function drawChart() {
  currentDate = timeline.getCurrentDate()
  let dataset = data.get(currentDate)

  Chart.init({
    data: dataset,
    transitionDuration,
    container: '.chart'
  })
}

function setupTimeline() {
  timeline.transitionDuration = transitionDuration

  timeline.setupTimeline({
    startDate: startDate,
    endDate: endDate,
    transitionDuration: transitionDuration,
    onUpdate: function() {
      drawChart()
      timeline.updateCurrentDate(currentDate)
      if (currentDate == endDate) {
        timeline.stopTimeline()
      }

      if (description[currentDate]) {
        TextDescription.setDesc(description[currentDate])
      }
    },
    /**
     * If the user clicks or drags the timeline, we need to find the closest, previous description to their selected date. Note that onSlide runs before onUpdate, so we need to specifically get the currentDate to ensure we're using the newly selected date.
     */
    onSlide: function() {
      let closestDescription = TextDescription.getClosestDescription(
        descriptionDates,
        timeline.getCurrentDate()
      )
      TextDescription.setDesc(description[closestDescription])
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
