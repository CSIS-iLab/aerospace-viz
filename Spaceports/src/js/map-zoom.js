import * as d3 from 'd3'

const MapZoom = {
	zoom: null,
	s: 1,
	width: null,
	height: null,
	projection: null,
	setupBtns: function() {
		d3.select('.zoomBtns').classed('is-visible', true)

		d3.select('#zoom-in').on('click', function() {
			MapZoom.zoom.scaleBy(d3.select('.svg-map'), 1.5)
		})

		d3.select('#zoom-out').on('click', function() {
			MapZoom.zoom.scaleBy(d3.select('.svg-map'), 0.5)
		})

		d3.select('#zoom-reset').on('click', function() {
			MapZoom.resetZoom()
		})
	},
	zoomed: function() {
		let s = MapZoom.s
		let width = MapZoom.width
		let height = MapZoom.height

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
		d3.select('.g-container').attr('transform', d3.event.transform)
	},
	zoomIn: function(item, d) {
		let width = MapZoom.width
		let height = MapZoom.height

		const x = this.projection([d.longitude, d.latitude])[0]
		const y = this.projection([d.longitude, d.latitude])[1]
		const scale = 3
		const translate = [width / 2 - scale * x, height / 2 - scale * y]

		if (navigator.userAgent.indexOf('Firefox') !== -1) {
			d3.select('.svg-map').call(
				MapZoom.zoom.transform,
				d3.zoomIdentity
					.translate(translate[0], translate[1])
					.scale(scale)
			)
		} else {
			d3.select('.svg-map')
				.transition()
				.duration(750)
				.call(
					MapZoom.zoom.transform,
					d3.zoomIdentity
						.translate(translate[0], translate[1])
						.scale(scale)
				)
		}
	},
	resetZoom: function() {
		d3.selectAll('.nodes.is-active').classed('is-active', false)
		// activeNode = d3.select(null)

		if (navigator.userAgent.indexOf('Firefox') !== -1) {
			d3.select('.svg-map').call(MapZoom.zoom.transform, d3.zoomIdentity)
		} else {
			d3.select('.svg-map')
				.transition()
				.duration(750)
				.call(MapZoom.zoom.transform, d3.zoomIdentity)
		}
	},
	stopped: function() {
		if (d3.event.defaultPrevented) d3.event.stopPropagation()
	}
}

export default MapZoom
