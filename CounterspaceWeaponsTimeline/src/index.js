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

let currentSubcategories = []

const storySelector = '.interactive__filters--story'
let currentStory = []

let clearAllSelector = '.filter-clear'

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
  // setupStorySelector()
  setupFormButtons()
  checkSubcategories()

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

  let categoryToggle = document.querySelector('.interactive__filters--category')

  categoryToggle.addEventListener('click', toggleCategoryCheckboxes)


  function toggleCategoryCheckboxes(e) {
    const isToggle = e.target.classList.contains('checkbox-expander')

    if (!isToggle) {
      return
    }

    e.target.parentElement.classList.toggle('isExpanded')

    if (e.target.innerHTML == "+") {
      e.target.innerHTML = "&#8722"
    } else {
      e.target.innerHTML = "+"
    }
  }
}

function checkSubcategories() {
  for (const category in data.subcategories) {
    let parentE = document.querySelectorAll('.parent')

    if (parentE.checked == "checked") {
      let children = document.querySelectorAll('.child')
      children.checked = "checked"
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

  // Buttons.setup({
  //   selector: clearAllSelector,
  //   data: "",
  //   current: "",
  //   onClick: drawChart()
  // })
}

/**
 * 
 * Setup category filter.
 * 
 */

function setupCategorySelector() {
  const options = Object.keys(data.subcategories).map((category) => ({
    value: category,
    label: category,
    children: data.subcategories[category].map((subcat) => ({
      value: subcat,
      label: subcat,
      parent: category
    }))
  }))

  Checkbox.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentCategories,
  })

  console.log(options)
}

/**
 * 
 * Setup story filter.
 * 
 */

function setupStorySelector() {

  // const options = {
  //   value: "storyBool",
  //   label: "Actions With Detailed Story Only"
  // }

  const container = document.querySelector('.interactive__filters--story')

  let inputWrapper = document.createElement('div')
  inputWrapper.className = 'filter-story'
  let inputLabel = document.createElement('label')
  inputLabel.innerHTML = "Actions With Detailed Story Only"
  inputLabel.setAttribute('for', 'story-toggle')
  inputLabel.setAttribute('class', 'input__label')
  let inputEl = document.createElement('input')
  inputEl.setAttribute('type', 'checkbox')
  inputEl.setAttribute('value', 'storyBool')
  inputEl.setAttribute('id', 'story-toggle')
  inputWrapper.appendChild(inputLabel)
  inputWrapper.appendChild(inputEl)

  container.appendChild(inputWrapper)

  // Checkbox.setup({
  //   selector: storySelector,
  //   name: 'filter-story',
  //   data: options,
  //   current: currentStory,
  // })
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
  currentCategories = Checkbox.getCurrent(categorySelector, '.parent')
  currentSubcategories = Checkbox.getCurrent(categorySelector, '.child')
  currentStory = Checkbox.getCurrent(storySelector, '.filter-story')

  console.log(currentStory)


  // Filter data based on selected filter functions (eg. year, category, type, etc.)
  let dataset = data.values.filter(
    (d) => {
      if ((currentCountry.includes(d.country) || currentCountry.includes('all')) && d.year >= startYear && d.year <= endYear && (currentCategories.includes(d.category) || currentSubcategories.includes(d.type + d.category))) {
        return d
      }
    }
  )


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
