import * as noUiSlider from 'nouislider'

const timeline = {
  el: document.querySelector('.timeline-bar'),
  btnControls: document.querySelector('.timeline-btn'),
  controlBtn: document.querySelector('.control-btn'),
  currentDateEl: document.querySelector('.timeline-current-date'),
  playing: false,
  timer: null,
  transitionDuration: 0,
  endDate: 0,
  startDate: 0,
  step: 24 * 60 * 60 * 1000,
  updateCurrentDate(date) {
    this.currentDateEl.innerHTML = `${this.formatDate(date)}`
  },
  formatDate(date) {
    date = new Date(date)
    date = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    )
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  },
  getCurrentDate() {
    return this.el.noUiSlider.get()
  },
  setupTimeline({ startDate, endDate, onUpdate }) {
    this.endDate = endDate
    this.startDate = startDate

    noUiSlider.create(this.el, {
      start: [startDate],
      connect: true,
      behaviour: 'tap-drag',
      // step: this.step,
      range: {
        min: startDate,
        max: endDate
      },
      format: {
        from: v => parseInt(v),
        to: v => parseInt(v)
      },
      pips: {
        mode: 'range',
        density: 15
      }
    })

    this.el.noUiSlider.set(startDate)

    this.setupBtnControls()

    this.el.noUiSlider.on('update', onUpdate)
    this.el.noUiSlider.on('slide', function(values, handle) {
      let tempDate = new Date(values[handle])
      tempDate = new Date(
        tempDate.getUTCFullYear(),
        tempDate.getUTCMonth(),
        tempDate.getUTCDate()
      ).getTime()
      // console.log(values[handle])
      // console.log(tempDate)
      timeline.el.noUiSlider.set(tempDate)
    })

    this.el.querySelector(
      `[data-value='${startDate}']`
    ).innerHTML = this.formatDate(startDate)

    this.el.querySelector(
      `[data-value='${endDate}']`
    ).innerHTML = this.formatDate(endDate)
  },
  setupBtnControls() {
    this.btnControls.addEventListener('click', function() {
      let currentDate = timeline.getCurrentDate()
      if (currentDate == timeline.endDate) {
        timeline.el.noUiSlider.set(timeline.startDate)
      }

      if (timeline.playing == true) {
        timeline.stopTimeline()
        return
      }

      timeline.startTimeline()
    })
  },
  startTimeline() {
    timeline.timer = setInterval(function() {
      let currentDate = timeline.getCurrentDate()
      let testCurrent = new Date(currentDate)
      let newDate = testCurrent.setDate(testCurrent.getDate() + 1)
      timeline.el.noUiSlider.set(newDate)
    }, timeline.transitionDuration)

    timeline.controlBtn.classList.remove('play-btn')
    timeline.controlBtn.classList.add('pause-btn')

    timeline.playing = true
  },
  stopTimeline() {
    clearInterval(timeline.timer)
    timeline.playing = false
    timeline.btnControls.classList.remove('pause-btn')
    timeline.btnControls.classList.add('play-btn')
  }
}

export default timeline
