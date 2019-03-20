import loadData from './index'

const satelliteFile = './data/20190318-russia.csv'
const targetsFile = './data/20190318-russia-targets.csv'

function init() {
  loadData(satelliteFile, targetsFile)
}

window.addEventListener('DOMContentLoaded', init)
// window.addEventListener('resize', resizeChart)
