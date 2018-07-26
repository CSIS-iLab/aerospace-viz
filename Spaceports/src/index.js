import * as d3 from 'd3'
import map from './js/map'
import parseData from './js/data'
import spaceportsMetaInfo from './data/20180726-spaceports-meta.csv'
import './scss/main.scss'

const spaceports = parseData.metaInfo({
	data: spaceportsMetaInfo
})

console.log(spaceports)

function init() {
	hideLoading()
	drawChart()
}

function hideLoading() {
	d3.select('.loading-container').style('display', 'none')
	d3.selectAll('.hide-on-load').classed('hide-on-load', false)
}

function drawChart() {
	let dataset = spaceports

	map.init({
		data: dataset,
		container: '.map-container'
	})
}

init()
