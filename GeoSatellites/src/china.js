import loadData from './index'

const country = 'China'
const satelliteFile = './data/20190325-china.csv'
const geoSatellitesFile = './data/20190325-all-geo-satellites.csv'

const description = {
  '2016-11-10': 'November event stuff',
  '2016-12-10': 'December event stuff',
  '2017-05-10': 'May event stuff'
}

const worldProjection = [-144, -6]

function init() {
  loadData(
    satelliteFile,
    geoSatellitesFile,
    description,
    country,
    worldProjection
  )
}

window.addEventListener('DOMContentLoaded', init)
