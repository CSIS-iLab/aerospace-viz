import breakpoints from './js/breakpoints'
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
let breakpoint = breakpoints.calculate()

function init() {
	if (breakpoints.isMobile()) {
		return
	}

	document.querySelector('.title-startYear').innerHTML = startYear
	document.querySelector('.title-endYear').innerHTML = endYear

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
	document.querySelector('.loading-container').style.display = 'block'
	document
		.querySelectorAll('.hide-on-load')
		.forEach(el => el.classList.remove('hide-on-load'))
}

function drawChart() {
	if (breakpoints.isMobile()) {
		return
	}

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

window.addEventListener('DOMContentLoaded', init)
