import loadData from './index'

const satelliteFile = './data/20190318-china.csv'
const targetsFile = './data/20190318-china-targets.csv'

function init() {
  loadData(satelliteFile, targetsFile)
}

window.addEventListener('DOMContentLoaded', init)
// window.addEventListener('resize', resizeChart)
