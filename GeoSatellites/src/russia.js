import loadData from './index'

const satellite = 'Luch-Olymp'
const satelliteCountry = 'Russian'
const satelliteFile = './data/20190325-russia.csv'
const geoSatellitesFile = './data/20190328-all-geo-satellites.csv'

const worldProjection = [-16.8, -6]

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
