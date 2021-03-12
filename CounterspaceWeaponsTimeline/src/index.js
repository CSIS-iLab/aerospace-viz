import { parseData } from './js/data'
import Chart from './js/chart'
import Dropdown from './js/dropdown'
import Buttons from './js/buttons'
import Checkbox from './js/checkbox'
import Img from '../img/css-icons/*.svg'

import './scss/main.scss'

const dataSrc =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JDQ4Sz-mqm1dsVfKT2vF9rINxli4Gm79FYFUZas7AzpgJwkW9jJ1ct7tuMHukwWJEH8qjAGIzfu8/pub?gid=892231861&single=true&output=csv'
let data

const countrySelector = '#filter-country'
let currentCountry = []

const startYearSelector = '#filter-start-year'
const endYearSelector = '#filter-end-year'
let startYear
let endYear

const categorySelector = '.interactive__filters--category'
let currentCategories = []

let currentSubcategories = []

const storyToggle = document.querySelector('#story-toggle')
let showStoriesOnly = ''

let clearAllSelector = '.filter-clear'

let defaults = {}

/**
 *
 * Filter menu functionality
 *
 */

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.interactive__filters-wrapper')
  const content = document.querySelector('#interactive__timeline')
  const header = document.querySelector('.interactive__header')
  const description = document.querySelector('.interactive__description')

  function setAria() {
    let isExpanded = hamburger.getAttribute('aria-expanded')

    if (isExpanded == 'true') {
      isExpanded = 'false'
    } else {
      isExpanded = 'true'
    }
    hamburger.setAttribute('aria-expanded', isExpanded)
  }

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('is-visible')
    setAria()
  })

  content.addEventListener('click', () => {
    if (menu.classList.contains('is-visible')) {
      menu.classList.remove('is-visible')
      setAria()
    }
  })

  const options = {
    // rootMargin: '-65px',
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry)
      if (!entry.isIntersecting) {
        header.classList.add('sticky')
        content.classList.add('margin-top')
      } else {
        header.classList.remove('sticky')
        content.classList.remove('margin-top')
      }
    })
  }, options)

  observer.observe(description)
})

function init() {
  loadDataAndSetup()
}

async function loadDataAndSetup() {
  data = await parseData({
    src: dataSrc,
  })

  defaults = {
    startYear: data.years[0],
    endYear: data.years[1],
    currentCategories: data.categories,
    showStoriesOnly: false,
    currentCountry: 'all',
  }

  startYear = defaults.startYear
  endYear = defaults.endYear
  currentCategories = defaults.currentCategories
  showStoriesOnly = defaults.showStoriesOnly
  currentCountry = defaults.currentCountry

  setupCountrySelector()
  setupYearSelector()
  setupCategorySelector()
  setupFormButtons()
  checkSubcategories()

  drawChart()

  hideLoading()

  let parentEl = document.querySelector('#interactive__timeline')

  parentEl.addEventListener('click', colorBackground)

  function colorBackground(e) {
    if (e.target !== e.currentTarget) {
      if (e.target.tagName == 'SUMMARY') {
        e.target.closest('.timeline__entry').classList.toggle('details-active')
      }
    }
  }

  let categoryToggle = document.querySelector(categorySelector)

  categoryToggle.addEventListener('click', toggleCategoryCheckboxes)

  function toggleCategoryCheckboxes(e) {
    const isToggle = e.target.classList.contains('checkbox-expander')

    if (!isToggle) {
      return
    }

    e.target.parentElement.classList.toggle('isExpanded')

    if (e.target.innerHTML == '+') {
      e.target.innerHTML = '&#8722'
    } else {
      e.target.innerHTML = '+'
    }
  }
}

function checkSubcategories() {
  for (const category in data.subcategories) {
    let parentE = document.querySelectorAll('.parent')

    if (parentE.checked == 'checked') {
      let children = document.querySelectorAll('.child')
      children.checked = 'checked'
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
    value: 'all',
    label: 'All countries',
  })

  Dropdown.setup({
    selector: countrySelector,
    name: 'filter-country',
    data: options,
    current: currentCountry,
    onChange: (e) => {}, // Won't need if we have apply btn
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
    onChange: (e) => {}, // Won't need if we have apply btn
  })

  Dropdown.setup({
    selector: endYearSelector,
    name: 'filter-end-year',
    data: options,
    current: endYear,
    onChange: (e) => {}, // Won't need if we have apply btn
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

  document
    .getElementById('filter-clear')
    .addEventListener('click', function () {
      let countryDropdown = document.querySelector(countrySelector)
      countryDropdown.value = defaults.currentCountry
      let startDropdown = document.querySelector(startYearSelector)
      startDropdown.value = defaults.startYear
      let endDropdown = document.querySelector(endYearSelector)
      endDropdown.value = defaults.endYear
      let categoryCheckboxes = document.querySelectorAll(
        '.parent input[type=checkbox]'
      )
      for (let i = 0; i < categoryCheckboxes.length; i++) {
        categoryCheckboxes[i].checked = true
      }
      storyToggle.checked = defaults.showStoriesOnly
      drawChart()
    })
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
      parent: category,
    })),
  }))

  Checkbox.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentCategories,
  })
}

/**
 *
 * Setup story filter.
 *
 */

function getShowStoryValue() {
  return storyToggle.checked
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
  showStoriesOnly = getShowStoryValue()

  // Filter data based on selected filter functions (eg. year, category, type, etc.)
  let dataset = data.values.filter((d) => {
    // Filter by date, taking into account items that span multiple years
    let showBasedOnYear = false
    if (d.endYear) {
      if (
        (d.startYear >= startYear && d.startYear <= endYear) ||
        (d.endYear >= startYear && d.endYear <= endYear) ||
        (d.startYear <= startYear && d.endYear >= endYear)
      ) {
        showBasedOnYear = true
      }
    } else {
      if (d.startYear >= startYear && d.startYear <= endYear) {
        showBasedOnYear = true
      }
    }

    if (
      (currentCountry.includes(d.country) || currentCountry.includes('all')) &&
      showBasedOnYear &&
      (currentCategories.includes(d.category) ||
        currentSubcategories.includes(d.type + d.category))
    ) {
      // Only apply this conditional if showStoriesOnly = true
      if (showStoriesOnly) {
        return d.storyBool ? d : false
      }
      return d
    }
  })

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
