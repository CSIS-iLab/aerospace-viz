import loadData from './index'

const satellite = 'Olymp-K'
const satelliteCountry = 'Russian'
const satelliteFile = './data/20190404-russia.csv'
const geoSatellitesFile = './data/20190328-china-geo-satellites.csv'

const worldProjection = [-15, -18]

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
