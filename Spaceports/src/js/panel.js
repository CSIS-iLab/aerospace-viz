import MapZoom from './map-zoom'

const panel = {
  el: document.querySelector('.panel'),
  closeBtn: document.querySelector('.panel-close'),
  detailedInfoItems: [],
  open() {
    this.el.classList.add('is-active')
  },
  close() {
    this.el.classList.remove('is-active')
  },
  updateInfo(data) {
    this.el.querySelector('.panel-heading').innerHTML = data.name
    this.detailedInfoItems.forEach(item => {
      let value = data[item]

      if (!isNaN(value)) {
        value = value.toLocaleString()
      }

      this.el.querySelector('span[data-fact="' + item + '"]').innerHTML = value
    })
  },
  setupClose() {
    this.closeBtn.addEventListener('click', function() {
      panel.close()
      MapZoom.resetZoom()
    })
  },
  getDetailedInfoItems() {
    this.detailedInfoItems = Array.from(
      document.querySelectorAll('.panel-fact-value')
    ).map(d => d.dataset.fact)
  },
  updateMinAndMaxYears(min, max) {
    document.getElementById('panel-min-year').innerHTML = min
    document.getElementById('panel-max-year').innerHTML = max
  }
}

export default panel
