import * as d3 from 'd3'
import map from './js/map'
import timeline from './js/timeline'
import parseData from './js/data'
import spaceportsMetaInfo from './data/20180726-spaceports-meta.csv'
import spaceportsLaunches from './data/20180726-launches.csv'
import './scss/main.scss'

const spaceports = parseData.metaInfo({
	data: spaceportsMetaInfo
})
const mapData = parseData.launches({
	data: spaceportsLaunches,
	meta: spaceports
})

const launchData = mapData.launchesByYear
const years = mapData.years
const startYear = years[0]
const endYear = years[years.length - 1]
const categories = mapData.categories
const minTotal = calcMinTotal(mapData.launchesByYear[endYear])
const maxTotal = calcMaxTotal(mapData.launchesByYear[endYear])

let currentYear = startYear

function init() {
	timeline.setupTimeline({
		startYear: startYear,
		endYear: endYear,
		onChange: function() {
			drawChart()
			if (currentYear == endYear) {
				timeline.stopTimeline()
			}
		}
	})
	hideLoading()
}

function hideLoading() {
	d3.select('.loading-container').style('display', 'none')
	d3.selectAll('.hide-on-load').classed('hide-on-load', false)
}

function drawChart() {
	currentYear = timeline.getCurrentYear()

	console.log(currentYear)

	let dataset = launchData[currentYear]

	map.init({
		data: dataset,
		categories: categories,
		minTotal: minTotal,
		maxTotal: maxTotal,
		container: '.map-container'
	})
}

function calcMaxTotal(data) {
	return Math.max(...data.map(d => d.ytd_total))
}

function calcMinTotal(data) {
	return Math.min(...data.map(d => d.ytd_total))
}

init()
