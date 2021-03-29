const d3 = Object.assign({}, require('d3-selection'))

const Buttons = {
  selector: null,
  buttons: null,
  createButtons({ selector, data, current, onClick }) {
    this.selector = selector

    this.buttons = d3
      .select(selector)
      .selectAll('button')
      .data(data)
      .join('button')
      .attr('class', 'btn btn--select')
      .html((d) => d.label)
      .attr('data-value', (d) => d.value)
      .classed('is-selected', (d) => d.value === current)
      .attr('aria-pressed', (d) => d.value === current)
      .on('click', onClick)
  },
  getCurrent() {
    return document.querySelector(`${this.selector}.is-selected`).dataset.value
  },
  setSelectedButton(currentValue) {
    this.buttons
      .classed('is-selected', (d) => d.value === currentValue)
      .attr('aria-pressed', (d) => d.value === currentValue)
  },
}

export default Buttons
