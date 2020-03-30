import loadData from './index'

const satellite = 'SJ-17'
const satelliteCountry = 'Chinese'
const satelliteFile = './data/20200330-china.csv'

const worldProjection = [-60, -18]

function init() {
  loadData(satelliteFile, satellite, satelliteCountry, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
