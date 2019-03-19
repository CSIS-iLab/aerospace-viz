import breakpoints from './js/breakpoints'
import Chart from './js/chart'
// import timeline from './js/timeline'
import parseData from './js/data'
import './scss/main.scss'

const data_file = './data/20190318-china.csv'

let data
let currentDate = new Date('2/1/2019').getTime() / 1000

function init() {
  loadData()
}

async function loadData() {
  data = await parseData(data_file)
  // setupFilterStatus()
  drawChart()
  hideLoading()

  let dates = Array.from(data.keys()).reverse()
  console.log(dates)

  let counter = 0
  let timerId = setTimeout(function tick() {
    console.log('tick')
    console.log(counter)
    currentDate = dates[counter]
    drawChart()
    if (counter === dates.length - 1) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(tick, 25) // (*)
    counter++
  }, 25)
}

function drawChart() {
  console.log(data)
  console.log(currentDate)
  // currentYear = timeline.getCurrentYear()

  let dataset = data.get(currentDate)
  // let dataset = data
  console.log(dataset)

  Chart.init({
    data: dataset,
    container: '.chart'
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
  console.log('hide loading')
  document.querySelector('.loading-container').style.display = 'none'
  document
    .querySelectorAll('.hide-on-load')
    .forEach(el => el.classList.remove('hide-on-load'))
}

window.addEventListener('DOMContentLoaded', init)
// window.addEventListener('resize', resizeChart)
