// import * as d3 from 'd3'

const timeline = {
  currentYearEl: document.querySelector('.timeline-current-year'),
  controlsEl: document.querySelector('.timeline-controls'),
  setYear(year) {
    this.currentYearEl.setAttribute('data-year', year)
    this.currentYearEl.innerHTML = year
  },
  getCurrentYear() {
    return +this.currentYearEl.getAttribute('data-year')
  },
  setupTimeline({ onChange }) {
    this.currentYearEl.addEventListener('change', function() {
      console.log(this)
    })

    this.controlsEl.addEventListener('click', function() {
      let currentYear = timeline.getCurrentYear()
      let newYear = currentYear + 1
      timeline.setYear(newYear)
      console.log(newYear)
      onChange()
    })
  }
}

export default timeline
