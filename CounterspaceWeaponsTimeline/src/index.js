import { parseData } from './js/data'
import Chart from './js/chart'
import Dropdown from './js/dropdown'
import Buttons from './js/buttons'
import Checkbox from './js/checkbox'

import './scss/main.scss'

const dataSrc =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JDQ4Sz-mqm1dsVfKT2vF9rINxli4Gm79FYFUZas7AzpgJwkW9jJ1ct7tuMHukwWJEH8qjAGIzfu8/pub?gid=892231861&single=true&output=csv'
let data

const countrySelector = '#filter-country'
let currentCountry = ["all"]

const startYearSelector = '#filter-start-year'
const endYearSelector = '#filter-end-year'
let startYear
let endYear

const categorySelector = '.interactive__filters--category'
let currentCategories = []

function init() {
  loadDataAndSetup()
}

async function loadDataAndSetup() {
  data = await parseData({
    src: dataSrc,
  })

  startYear = data.years[0]
  endYear = data.years[1]
  currentCategories = data.categories

  setupCountrySelector()
  setupYearSelector()
  setupCategorySelector()
  setupFormButtons()

  drawChart()

  hideLoading()


  let parentEl = document.querySelector('#interactive__timeline')

  parentEl.addEventListener("click", colorBackground)

  function colorBackground(e) {
    if (e.target !== e.currentTarget) {
      if (e.target.tagName == 'SUMMARY') {
        e.target.closest('.timeline__entry').classList.toggle("details-active")
      }
    }
  }
}

/**
 *
 * Setup Country Selector
 *
 */

function setupCountrySelector() {
  let options = data.countries.map((country) => ({
    value: country,
    label: country,
  }))

  options.unshift({
    value: "all",
    label: "All countries"
  })

  Dropdown.setup({
    selector: countrySelector,
    name: 'filter-country',
    data: options,
    current: currentCountry,
    onChange: (e) => { }, // Won't need if we have apply btn
  })
}

/**
 *
 * Setup Year Selectors
 *
 */

function setupYearSelector() {
  let options = []
  for (let i = startYear; i <= endYear; i++) {
    options.push({
      value: i,
      label: i,
    })
  }

  Dropdown.setup({
    selector: startYearSelector,
    name: 'filter-start-year',
    data: options,
    current: startYear,
    onChange: (e) => { }, // Won't need if we have apply btn
  })

  Dropdown.setup({
    selector: endYearSelector,
    name: 'filter-end-year',
    data: options,
    current: endYear,
    onChange: (e) => { }, // Won't need if we have apply btn
  })
}

/**
 *
 * Setup Apply & Clear Buttons
 *
 */

function setupFormButtons() {
  document
    .getElementById('filter-apply')
    .addEventListener('click', function () {
      drawChart()
    })
}

/**
 * Setup category filter.
 */
function setupCategorySelector() {
  const options = data.categories.map((category) => ({
    value: category,
    label: category,
  }))
  console.log(data)

  Checkbox.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentCategories,
  })
}

/**
 *
 * Calls the Chart function to draw the chart with the current dataset.
 *
 */

function drawChart() {
  currentCountry = Dropdown.getCurrent(countrySelector)
  startYear = Dropdown.getCurrent(startYearSelector)
  endYear = Dropdown.getCurrent(endYearSelector)
  currentCategories = Checkbox.getCurrent(categorySelector)

  // Filter data based on selected filter functions (eg. year, category, type, etc.)
  let dataset = data.values.filter(
    (d) => {
      if ((currentCountry.includes(d.country) || currentCountry.includes('all')) && d.year >= startYear && d.year <= endYear && currentCategories.includes(d.category)) {
        return d
      }
    }
  )

  console.log(dataset)

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
