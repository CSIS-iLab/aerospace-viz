import * as d3 from 'd3'
const tooltipEl = d3.select('.tooltip')

export default {
  show: function (content) {
    let yPos = d3.event.pageY
    let xPos = d3.event.pageX
    if ((xPos + 10) > document.body.clientWidth - 200) {
      xPos = document.body.clientWidth + 5 - 200
    }

    tooltipEl.transition()
        .duration(200)
        .style('opacity', 0.9)
        .on('end', function () {
          tooltipEl.classed('isActive', true)
          tooltipEl.select('.tooltip-close').on('click', this.hide)
        })
    tooltipEl.html(content)
        .style('visibility', 'visible')
        .style('left', xPos + 'px')
        .style('top', yPos + 'px')
  },
  hide: function () {
    tooltipEl.transition()
      .duration(500)
      .style('opacity', 0)
  },
  formatContent: function (component) {
    let content = '<ul class="tooltip-list">'
    component.forEach(function (item, index) {
      let cssClass = null
      if (item.class) {
        cssClass = item.class
      }
      let label = Object.keys(item)[0]
      content += `<li class="${cssClass}"><span class="tooltip-label">${label}:</span> ${item[label]}</li>`
    })
    content += '</ul>'
    return content
  }
}

// export default { tooltip }
