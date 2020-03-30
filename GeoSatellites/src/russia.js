import loadData from './index'

const satellite = 'Luch'
const satelliteCountry = 'Russian'
const satelliteFile = './data/20200330-russia.csv'

const worldProjection = [0, -18]

function init() {
  loadData(satelliteFile, satellite, satelliteCountry, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
