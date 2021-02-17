const d3 = Object.assign({}, require('d3-selection'))

const Checkbox = {
  setup: function ({ selector, name, data, current }) {
    let selectEl = d3.select(selector).attr('name', name)

    selectEl
      .selectAll('.checkbox-container')
      .data(data)
      .join((enter) =>
        enter
          .append('div')
          .attr('class', 'checkbox-container')
          .each(generateCheckboxes)
      )
      .each(function (d) {
        d3.select(this)
          .select('input')
          .property('checked', current.includes(d.value))
      })
  },
  getCurrent: function (selector) {
    let selected = []
    d3.selectAll(`${selector} input:checked`).each((d) =>
      selected.push(d.value)
    )
    return selected
  },
}

function generateCheckboxes(d, i, n) {
  const container = d3.select(this)

  const parent = container
    .append('div')
    .attr('class', 'parent')

  console.log(d.children)
  parent
    .append('input')
    .attr('type', 'checkbox')
    .attr('id', (d) => d.value)
    .property('value', (d) => d.value)

  parent
    .append('label')
    .attr('for', (d) => d.value)
    .text((d) => d.label)

  container
    .selectAll('.child')
    .data(d.children)
    .join((enter) =>
      enter
        .append('div')
        .attr('class', 'child')
        .each(generateChildren)
    )
}

function generateChildren(d, i, n) {
  const container = d3.select(this)

  container
    .append('input')
    .attr('type', 'checkbox')
    .attr('id', (d) => d.value)
    .property('value', (d) => d.value)

  container
    .append('label')
    .attr('for', (d) => d.value)
    .text((d) => d.label)
}

export default Checkbox
