import loadData from './index'

const satellite = 'SJ-17'
const satelliteFile = './data/20190325-china.csv'
const geoSatellitesFile = './data/20190325-all-geo-satellites.csv'

const worldProjection = [-144, -6]

function init() {
  loadData(satelliteFile, geoSatellitesFile, satellite, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
