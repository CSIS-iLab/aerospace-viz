// import * as d3 from 'd3'
import * as noUiSlider from 'nouislider'

const timeline = {
  currentYearEl: document.querySelector('.timeline-current-year'),
  el: document.querySelector('.timeline-controls'),
  setYear(year) {
    this.currentYearEl.setAttribute('data-year', year)
    this.currentYearEl.innerHTML = year
  },
  getCurrentYear() {
    return this.el.noUiSlider.get()
  },
  setupTimeline({ startYear, endYear, onChange }) {
    noUiSlider.create(this.el, {
      start: [startYear],
      connect: true,
      behaviour: 'tap-drag',
      step: 1,
      range: {
        min: startYear,
        max: endYear
      },
      format: {
        from: v => parseInt(v),
        to: v => parseInt(v)
      }
    })
    // this.currentYearEl.addEventListener('change', function() {
    //   console.log(this)
    // })

    // this.controlsEl.addEventListener('click', function() {
    //   let currentYear = timeline.getCurrentYear()
    //   let newYear = currentYear + 1
    //   timeline.setYear(newYear)
    //   console.log(newYear)
    //   onChange()
    // })
  }
}

export default timeline
