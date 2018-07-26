import * as d3 from 'd3'

const zoom = {
	setupBtns: function() {
		d3.select('.zoomBtns').classed('is-visible', true)

		d3.select('#zoom-in').on('click', function() {
			zoom.scaleBy(d3.select('.chart .svg-map'), 1.5)
		})

		d3.select('#zoom-out').on('click', function() {
			zoom.scaleBy(d3.select('.chart .svg-map'), 0.5)
		})

		d3.select('#zoom-reset').on('click', function() {
			resetZoom()
		})
	},
	zoomed: function() {
		var t = [d3.event.transform.x, d3.event.transform.y]
		s = d3.event.transform.k
		var h = 0

		t[0] = Math.min(
			(width / height) * (s - 1),
			Math.max(width * (1 - s), t[0])
		)

		t[1] = Math.min(
			h * (s - 1) + h * s,
			Math.max(height * (1 - s) - h * s, t[1])
		)

		// group.attr('transform', 'translate(' + t + ')scale(' + s + ')')

		d3.selectAll('.countries').style('stroke-width', 1 / s)
		group.attr('transform', d3.event.transform)
	},
	zoomIn: function(item, d) {
		if (activeNode.node() === item.node()) return resetZoom()
		activeNode = item
		hideNewElements = true

		var bounds = path.bounds(d),
			dx = bounds[1][0] - bounds[0][0],
			dy = bounds[1][1] - bounds[0][1],
			x = (bounds[0][0] + bounds[1][0]) / 2,
			y = (bounds[0][1] + bounds[1][1]) / 2,
			scale = Math.max(
				1,
				Math.min(8, 0.9 / Math.max(dx / width, dy / height))
			),
			translate = [width / 2 - scale * x, height / 2 - scale * y]

		if (navigator.userAgent.indexOf('Firefox') !== -1) {
			d3.select('.svg-map').call(
				zoom.transform,
				d3.zoomIdentity
					.translate(translate[0], translate[1])
					.scale(scale)
			)
		} else {
			d3.select('.svg-map')
				.transition()
				.duration(750)
				.call(
					zoom.transform,
					d3.zoomIdentity
						.translate(translate[0], translate[1])
						.scale(scale)
				)
		}
	},
	resetZoom: function() {
		d3.selectAll('.nodes.is-active').classed('is-active', false)
		activeNode = d3.select(null)
		hideNewElements = true

		if (navigator.userAgent.indexOf('Firefox') !== -1) {
			d3.select('.svg-map').call(zoom.transform, d3.zoomIdentity)
		} else {
			d3.select('.svg-map')
				.transition()
				.duration(750)
				.call(zoom.transform, d3.zoomIdentity)
		}
	}
}

export default zoom
