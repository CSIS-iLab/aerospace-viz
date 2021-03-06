import { select } from 'd3-selection'
import { transition, duration, on } from 'd3-transition'
const tooltipEl = select('.tooltip')

export default {
  show: function(event, content) {
    let yPos = event.pageY - 100
    let xPos = event.pageX
    if (xPos + 10 > document.body.clientWidth - 115) {
      xPos = document.body.clientWidth + 5 - 175
    }

    if (yPos < 25) {
      yPos = yPos + 85
    }

    tooltipEl
      .transition()
      .duration(200)
      .style('opacity', 0.9)
      .on('end', function() {
        tooltipEl.classed('isActive', true)
        tooltipEl.select('.tooltip-close').on('click', this.hide)
      })
    tooltipEl
      .html(content)
      .style('visibility', 'visible')
      .style('left', xPos + 'px')
      .style('top', yPos + 'px')
  },
  hide: function() {
    tooltipEl
      .transition()
      .duration(500)
      .style('opacity', 0)
  },
  formatContent: function(component, isList = false) {
    let content = ''
    if (isList) {
      content = '<ul class="tooltip-list">'
    }
    component.forEach(function(item, index) {
      let cssClass = null
      if (item.class) {
        cssClass = item.class
      }
      let prefix = ''
      let suffix = '<br />'
      if (isList) {
        prefix = `<li class="${cssClass}">`
        suffix = '</li>'
      }

      let label = Object.keys(item)[0]
      content += `${prefix}<span class="tooltip-label">${label}:</span> ${
        item[label]
      }${suffix}`
    })
    if (isList) {
      content += '</ul>'
    }
    return content
  }
}

// export default { tooltip }
