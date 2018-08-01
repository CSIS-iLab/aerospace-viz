import MapZoom from './map-zoom'

const panel = {
  el: document.querySelector('.panel'),
  closeBtn: document.querySelector('.panel-close'),
  toggle() {
    this.el.classList.toggle('is-active')
  },
  updateInfo(data) {
    this.el.querySelector('.panel-heading').innerHTML = data.name
  },
  setupClose() {
    this.closeBtn.addEventListener('click', function() {
      panel.toggle()
      MapZoom.resetZoom()
    })
  }
}

export default panel
