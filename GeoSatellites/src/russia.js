import loadData from './index'

const country = 'Russia'
const satelliteFile = './data/20190318-russia.csv'
const targetsFile = './data/20190318-russia-targets.csv'

const description = {
  '2016-11-09':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const worldProjection = [-16.8, -6]

function init() {
  loadData(satelliteFile, targetsFile, description, country, worldProjection)
}

window.addEventListener('DOMContentLoaded', init)
