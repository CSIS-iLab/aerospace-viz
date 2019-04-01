import loadData from './index'

const satellite = 'SJ-17'
const satelliteCountry = 'Chinese'
const satelliteFile = './data/20190325-china.csv'
const geoSatellitesFile = './data/20190328-all-geo-satellites.csv'

const worldProjection = [-60, -18]

function init() {
  loadData(
    satelliteFile,
    geoSatellitesFile,
    satellite,
    satelliteCountry,
    worldProjection
  )
}

window.addEventListener('DOMContentLoaded', init)
