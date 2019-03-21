import loadData from './index'

const country = 'China'
const satelliteFile = './data/20190318-china.csv'
const targetsFile = './data/20190318-china-targets.csv'

const description = {
  '2016-11-10': 'November event stuff',
  '2016-12-10': 'December event stuff',
  '2017-05-10': 'May event stuff'
}

const worldProjection = [270, -18]

function init() {
  loadData(satelliteFile, targetsFile, description, country, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
