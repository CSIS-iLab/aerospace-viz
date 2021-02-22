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
          .attr('data-category', d => d.value)
          .each(function (d) {
            d3.select(this)
              .append('span')
              .attr('class', 'checkbox-expander')
              .text('+')
          })
          .each(generateCheckboxes)
      )
    // .each(function (d) {
    //   d3.select(this)
    //     .select('input')
    //     .property('checked', current.includes(d.value))
    // })
  },
  getCurrent: function (selector, wrapperClass) {
    let selected = []
    d3.selectAll(`${selector} ${wrapperClass} input:checked`)
      .each((d) => {
        if (!d.parent) {
          selected.push(d.value)
        } else {
          selected.push(d.value + d.parent)
        }
      })

    console.log(selected)
    return selected
  },
}

function generateCheckboxes(d, i, n) {
  const container = d3.select(this)

  console.log(container)

  const parent = container
    .append('div')
    .attr('class', 'parent')

  parent
    .append('input')
    .attr('type', 'checkbox')
    .property("checked", true)
    .attr('id', (d) => d.value)
    .property('value', (d) => d.value)
    .on('change', parentSelection)

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

function parentSelection(e, d) {
  const isChecked = this.checked
  d.children.map((c) => document.getElementById(c.value + c.parent)).forEach((el) => el.checked = isChecked)
}

function generateChildren(d, i, n) {
  const container = d3.select(this)

  container
    .append('input')
    .attr('type', 'checkbox')
    .property("checked", true)
    .attr('id', (d) => d.value + d.parent)
    .property('value', (d) => d.value)
    .on("change", function (event, d) {
      childSelection(d, n);
    })

  container
    .append('label')
    .attr('for', (d) => d.value)
    .text((d) => d.label)
}

function childSelection(d, childrenNodes) {
  const parentE = document.getElementById(d.parent)
  const numberOfCheckedChildren = childrenNodes.filter((node) => node.children[0].checked).length

  if (childrenNodes.length === numberOfCheckedChildren) {
    parentE.checked = true
  } else {
    parentE.checked = false
  }
}

export default Checkbox
