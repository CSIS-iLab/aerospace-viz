import * as d3 from 'd3'
import map from './js/map'
import timeline from './js/timeline'
import panel from './js/panel'
import parseData from './js/data'
import spaceportsMetaInfo from './data/20180807-spaceports-meta.csv'
import spaceportsLaunches from './data/20180726-launches.csv'
import spaceportsInclinations from './data/20180803-inclinations.csv'
import './scss/main.scss'

const spaceports = parseData.metaInfo({
	data: spaceportsMetaInfo
})
const mapData = parseData.launches({
	data: spaceportsLaunches,
	meta: spaceports
})
const incliationsData = parseData.inclinations({
	data: spaceportsInclinations,
	meta: spaceports
})

const launchData = mapData.launchesByYear
const totalPerYear = mapData.totalPerYear
const years = mapData.years
const startYear = years[0]
const endYear = years[years.length - 1]
const categories = mapData.categories
const minTotal = calcMinTotal(mapData.launchesByYear[endYear])
const maxTotal = calcMaxTotal(mapData.launchesByYear[endYear])

const transitionDuration = 400

let currentYear = endYear

function init() {
	map.setGlobals({
		spaceportsMeta: spaceports,
		categories: categories,
		minTotal: minTotal,
		maxTotal: maxTotal,
		startYear: startYear,
		transitionDuration: transitionDuration
	})

	timeline.transitionDuration = transitionDuration

	timeline.setupTimeline({
		startYear: startYear,
		endYear: endYear,
		currentYear: currentYear,
		transitionDuration: transitionDuration,
		onChange: function() {
			drawChart()
			timeline.updateCurrentYear(currentYear)
			timeline.updateCurrentLaunches(totalPerYear[currentYear])
			if (currentYear == endYear) {
				timeline.stopTimeline()
			}
		}
	})
	hideLoading()

	panel.setupClose()
	panel.spaceportsMeta = spaceports
	panel.getDetailedInfoItems()
	panel.updateMinAndMaxYears(startYear, endYear)
}

function hideLoading() {
	d3.select('.loading-container').style('display', 'none')
	d3.selectAll('.hide-on-load').classed('hide-on-load', false)
}

function drawChart() {
	// console.log('drawchart')
	currentYear = timeline.getCurrentYear()

	let dataset = launchData[currentYear]

	map.init({
		data: dataset,
		currentYear: currentYear,
		container: '.map-container'
	})
}

function calcMaxTotal(data) {
	return Math.max(...data.map(d => d.ytd_total))
}

function calcMinTotal(data) {
	return Math.min(...data.map(d => d.ytd_total))
}

function resizeChart() {
	drawChart()
}

window.addEventListener('DOMContentLoaded', init)
// window.addEventListener('resize', resizeChart)
