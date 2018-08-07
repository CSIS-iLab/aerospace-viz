import * as noUiSlider from 'nouislider'

const timeline = {
  el: document.querySelector('.timeline-bar'),
  btnControls: document.querySelector('.timeline-btn'),
  currentYearEl: document.querySelector('.timeline-current-year'),
  currentLaunchesEl: document.querySelector('.timeline-num-launches'),
  playing: false,
  timer: null,
  transitionDuration: 0,
  endYear: 0,
  startYear: 0,
  updateCurrentYear(year) {
    this.currentYearEl.innerHTML = year
  },
  updateCurrentLaunches(launches) {
    this.currentLaunchesEl.innerHTML = launches
  },
  getCurrentYear() {
    return this.el.noUiSlider.get()
  },
  setupTimeline({ startYear, endYear, currentYear, onChange }) {
    this.endYear = endYear
    this.startYear = startYear
    noUiSlider.create(this.el, {
      start: [endYear],
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

    this.el.noUiSlider.set(endYear)

    this.setupBtnControls()

    this.el.noUiSlider.on('update', onChange)
  },
  setupBtnControls() {
    this.btnControls.addEventListener('click', function() {
      let currentYear = timeline.getCurrentYear()
      if (currentYear == timeline.endYear) {
        timeline.el.noUiSlider.set(timeline.startYear)
      }

      if (timeline.playing == true) {
        timeline.stopTimeline()
        return
      }

      timeline.timer = setInterval(function() {
        currentYear = timeline.getCurrentYear()
        let newYear = currentYear + 1
        timeline.el.noUiSlider.set(newYear)
      }, timeline.transitionDuration)

      this.classList.remove('play-btn')
      this.classList.add('pause-btn')
      this.innerHTML = 'Pause'

      timeline.playing = true
    })
  },
  stopTimeline() {
    clearInterval(timeline.timer)
    timeline.playing = false
    timeline.btnControls.classList.remove('pause-btn')
    timeline.btnControls.classList.add('play-btn')
    timeline.btnControls.innerHTML = 'Play'
  }
}

export default timeline
