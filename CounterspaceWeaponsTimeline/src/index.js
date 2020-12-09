import { parseData } from './js/data'
import Chart from './js/chart'
import Dropdown from './js/dropdown'
import Buttons from './js/buttons'

import './scss/main.scss'

const dataSrc =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JDQ4Sz-mqm1dsVfKT2vF9rINxli4Gm79FYFUZas7AzpgJwkW9jJ1ct7tuMHukwWJEH8qjAGIzfu8/pub?gid=892231861&single=true&output=csv'
let data

const startYearSelector = '#filter-start-year'
const endYearSelector = '#filter-end-year'
let startYear
let endYear

const categorySelector = '.interactive__filters--category'
let currentCategory = ''

function init() {
  console.log('hello!')
  loadDataAndSetup()
}

async function loadDataAndSetup() {
  data = await parseData({
    src: dataSrc,
  })

  // currentYear = data.years[0]
  // setupYearSelector()
  // setupFormButtons()

  // drawChart()

  hideLoading()
}

/**
 *
 * Setup Year Selectors
 *
 */

function setupYearSelector() {
  const options = data.years.map((year) => ({ value: year, label: year }))

  Dropdown.setup({
    selector: startYearSelector,
    name: 'filter-start-year',
    data: options,
    current: startYear,
    onChange: (e) => {},
  })

  Dropdown.setup({
    selector: endYearSelector,
    name: 'filter-end-year',
    data: options,
    current: endYear,
    onChange: (e) => {},
  })
}

/**
 *
 * Setup Apply & Clear Buttons
 *
 */

function setupFormButtons() {}

/**
 * Setup category filter.
 */
function setupCategorySelector() {
  const options = data.years.map((year) => ({ value: year, label: year }))

  Dropdown.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentCategory,
    onChange: (e) => {},
  })
}

/**
 *
 * Calls the Chart function to draw the chart with the current dataset.
 *
 */

function drawChart() {
  startYear = Dropdown.getCurrent(startYearSelector)
  endYear = Dropdown.getCurrent(endYearSelector)

  let dataset = data.values[currentYear].map((d) => ({
    ...d,
    value: d[currentType],
  }))

  Chart.init({
    data: dataset,
    container: '#interactive__timeline',
  })
}

/**
 *
 * Hides all elements hidden on initial load
 *
 */

function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none'
  document
    .querySelectorAll('.hide-on-load')
    .forEach((el) => el.classList.remove('hide-on-load'))
}

window.addEventListener('DOMContentLoaded', init)
