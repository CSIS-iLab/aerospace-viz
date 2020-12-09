const d3 = Object.assign({}, require('d3-selection'))

const selectors = {
  setup: function ({ selector, name, data, current, onChange }) {
    let selectEl = d3.select(selector).attr('name', name).on('change', onChange) // Can remove onChange if we use apply button

    let options = selectEl.selectAll('option').data(data)

    options
      .enter()
      .append('option')
      .text((d) => d.label)
      .property('value', (d) => d.value)
      .property('selected', (d) => d.value == current)
      .property('disabled', (d) => d.disabled)
  },
  getCurrent: function (selector) {
    return document.querySelector(selector).value
  },
  setCurrent: function ({ selector, value }) {
    document.querySelector(selector).value = value
  },
}

export default selectors
