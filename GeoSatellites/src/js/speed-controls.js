const SpeedControls = {
  btns: document.querySelectorAll('.speed-btn'),
  init({ currentSpeed, onClick }) {
    document
      .querySelector('.speed-btn--' + currentSpeed)
      .classList.add('is-active')

    Array.from(this.btns).forEach(el => {
      el.addEventListener('click', onClick)
    })
  },
  getCurrentSpeed() {
    return document.querySelector('.speed-btn.is-active').dataset.speed
  }
}

export default SpeedControls
