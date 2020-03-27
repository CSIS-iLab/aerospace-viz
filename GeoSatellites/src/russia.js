import loadData from './index'

const satellite = 'Luch (Olymp-K)'
const satelliteCountry = 'Russian'
const satelliteFile = './data/20200326-russia.csv'

const worldProjection = [-15, -18]

function init() {
  loadData(satelliteFile, satellite, satelliteCountry, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
