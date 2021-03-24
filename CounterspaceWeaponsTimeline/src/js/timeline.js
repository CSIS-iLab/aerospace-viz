import * as noUiSlider from 'nouislider'

const timeline = {
  el: document.querySelector('.timeline-bar'),
  playing: false,
  endDate: 0,
  startDate: 0,
  getCurrentDate() {
    return this.el.noUiSlider.get()
  },
  setupTimeline({ startDate, endDate }) {
    noUiSlider.create(this.el, {
      start: [startDate, endDate],
      connect: true,
      behaviour: 'tap-drag',
      step: 1,
      range: {
        min: startDate,
        max: endDate,
      },
      tooltips: [true, true],
      format: {
        from: (v) => parseInt(v),
        to: (v) => parseInt(v),
      },
      pips: {
        mode: 'range',
        density: 15,
      }
    })
  },
  resetTimeline() {
    this.el.noUiSlider.reset()
  },
}

export default timeline
