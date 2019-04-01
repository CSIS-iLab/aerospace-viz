import loadData from './index'

const satellite = 'Luch-Olymp'
const satelliteCountry = 'Russian'
const satelliteFile = './data/20190401-russia.csv'
const geoSatellitesFile = './data/20190328-all-geo-satellites.csv'

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
