// import * as d3 from 'd3'
import * as noUiSlider from 'nouislider'

const timeline = {
  currentYearEl: document.querySelector('.timeline-current-year'),
  el: document.querySelector('.timeline-controls'),
  btnControls: document.querySelector('.timeline-btn'),
  playing: false,
  timer: null,
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
      },
      pips: {
        mode: 'range',
        density: 10
      }
    })

    this.setupBtnControls()

    this.el.noUiSlider.on('update', onChange)
  },
  setupBtnControls() {
    // this.btnControls = document.querySelector('.noUi-handle')
    this.btnControls.addEventListener('click', function() {
      if (timeline.playing == true) {
        timeline.stopTimeline()
        return
      }

      timeline.timer = setInterval(function() {
        let currentYear = timeline.getCurrentYear()
        let newYear = currentYear + 1
        timeline.el.noUiSlider.set(newYear)
      }, 600)

      this.classList.remove('play-btn')
      this.classList.add('pause-btn')

      timeline.playing = true

      // if (timeline.playing == false) {
      //   timeline.timer = setInterval(function() {
      //     let currentYear = timeline.getCurrentYear()
      //     let newYear = currentYear + 1
      //     timeline.el.noUiSlider.set(newYear)
      //   }, 600)

      //   // d3.select(this)
      //   //   .classed('active', true)
      //   //   .select('span')
      //   //   .attr('class', 'pause-icon')
      //   timeline.playing = true
      // } else {
      //   timeline.stopTimeline()
      // }
    })
  },
  stopTimeline() {
    clearInterval(timeline.timer)
    timeline.playing = false
    timeline.btnControls.classList.remove('pause-btn')
    timeline.btnControls.classList.add('play-btn')
  }
}

export default timeline
