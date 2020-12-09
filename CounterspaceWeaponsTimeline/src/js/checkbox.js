const d3 = Object.assign({}, require('d3-selection'))

const selectors = {
  setup: function ({ selector, name, data, current, onChange }) {
    let selectEl = d3.select(selector).attr('name', name).on('change', onChange)

    let options = selectEl.selectAll('.checkbox-container').data(data)

    options
      .enter()
      .append('div')
      .attr('class', 'checkbox-container')
      .text((d) => d.label)
      .property('value', (d) => d.value)
      .property('selected', (d) => d.value == current)
  },
  getCurrent: function (selector) {
    return document.querySelector(selector).value
  },
  setCurrent: function ({ selector, value }) {
    document.querySelector(selector).value = value
  },
}

export default selectors
