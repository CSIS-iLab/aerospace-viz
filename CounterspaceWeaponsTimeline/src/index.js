import { parseData } from './js/data'
import Chart from './js/chart'
import Dropdown from './js/dropdown'
import Buttons from './js/buttons'
import Checkbox from './js/checkbox'
import timeline from './js/timeline'
import Img from '../img/css-icons/*.svg'

import 'nouislider/distribute/nouislider.min.css'
import './scss/main.scss'

const dataSrc =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JDQ4Sz-mqm1dsVfKT2vF9rINxli4Gm79FYFUZas7AzpgJwkW9jJ1ct7tuMHukwWJEH8qjAGIzfu8/pub?gid=892231861&single=true&output=csv'
let data

const countrySelector = '#filter-country'

const startYearSelector = '#filter-start-year'
const endYearSelector = '#filter-end-year'

const categorySelector = '.interactive__filters--category'

const storyToggle = document.querySelector('#story-toggle')

let defaults = {}
let currentValues = {}

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

  let options = {}

  if (window.innerWidth >= 1024) {
    options = {
      rootMargin: '-55px',
    }
  } else {
    options = {
      rootMargin: '-26px',
    }
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
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

function getURLParams() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  if (urlParams.has('categories')) {
    currentValues.currentCategories = urlParams
      .getAll('categories')
      .toString()
      .split(',')
  }
  if (urlParams.has('subcategories')) {
    currentValues.currentSubcategories = urlParams
      .getAll('subcategories')
      .toString()
      .split(',')
  }
  if (urlParams.has('country')) {
    currentValues.currentCountry = urlParams.get('country')
  }
  if (urlParams.has('startYear')) {
    currentValues.startYear = +urlParams.get('startYear')
  }
  if (urlParams.has('endYear')) {
    currentValues.endYear = +urlParams.get('endYear')
  }
  if (urlParams.has('showStories')) {
    currentValues.showStoriesOnly = urlParams.get('showStories') == 'true'
  }
}

function init() {
  loadDataAndSetup()
  getURLParams()
}

async function loadDataAndSetup() {
  data = await parseData({
    src: dataSrc,
  })

  let subcategoriesPlusParent = []

  Object.keys(data.subcategories).forEach((category) => {
    data.subcategories[category].forEach((subcat) => {
      subcategoriesPlusParent.push(subcat + category)
    })
  })

  defaults = {
    startYear: data.years[0],
    endYear: data.years[1],
    currentCategories: data.categories,
    showStoriesOnly: false,
    currentCountry: 'all',
    currentSubcategories: subcategoriesPlusParent,
  }

  currentValues = {
    startYear: currentValues.startYear || defaults.startYear,
    endYear: currentValues.endYear || defaults.endYear,
    currentCategories:
      currentValues.currentCategories || defaults.currentCategories,
    currentSubcategories:
      currentValues.currentSubcategories || defaults.currentSubcategories,
    showStoriesOnly: currentValues.showStoriesOnly || defaults.showStoriesOnly,
    currentCountry: currentValues.currentCountry || defaults.currentCountry,
  }

  setupCountrySelector()
  // setupYearSelector()
  setupTimeline()
  setupCategorySelector()
  setupFormButtons()
  setShowStoryValue()
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
    current: currentValues.currentCountry,
    onChange: (e) => {}, // Won't need if we have apply btn
  })
}

/**
 *
 * Setup Year Selectors
 *
 */

// function setupYearSelector() {
//   let options = []
//   for (let i = data.years[0]; i <= data.years[1]; i++) {
//     options.push({
//       value: i,
//       label: i,
//     })
//   }

//   Dropdown.setup({
//     selector: startYearSelector,
//     name: 'filter-start-year',
//     data: options,
//     current: currentValues.startYear,
//     onChange: (e) => {}, // Won't need if we have apply btn
//   })

//   Dropdown.setup({
//     selector: endYearSelector,
//     name: 'filter-end-year',
//     data: options.reverse(),
//     current: currentValues.endYear,
//     onChange: (e) => {}, // Won't need if we have apply btn
//   })
// }

function setupTimeline() {
  timeline.setupTimeline({
    startDate: defaults.startYear,
    endDate: defaults.endYear,
    startHandle: currentValues.startYear,
    endHandle: currentValues.endYear,
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
      timeline.resetTimeline({
        startDate: defaults.startYear,
        endDate: defaults.endYear,
      })
      let categoryCheckboxes = document.querySelectorAll(
        '.parent input[type=checkbox]'
      )
      for (let i = 0; i < categoryCheckboxes.length; i++) {
        categoryCheckboxes[i].checked = true
      }
      let subcategoryCheckboxes = document.querySelectorAll(
        '.child input[type=checkbox]'
      )
      for (let i = 0; i < subcategoryCheckboxes.length; i++) {
        subcategoryCheckboxes[i].checked = true
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
    checked: currentValues.currentCategories.includes(category),
    children: data.subcategories[category].map((subcat) => ({
      value: subcat,
      label: subcat,
      parent: category,
      checked: currentValues.currentSubcategories.includes(subcat + category),
    })),
  }))

  Checkbox.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentValues.currentCategories,
  })
}

/**
 *
 * Setup story filter.
 *
 */

function setShowStoryValue() {
  storyToggle.checked = currentValues.showStoriesOnly
}

function getShowStoryValue() {
  return storyToggle.checked
}

/**
 *
 * Set URL parameters.
 *
 */

function setURLParameters() {
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('startYear', currentValues.startYear)
    searchParams.set('endYear', currentValues.endYear)
    searchParams.set('country', currentValues.currentCountry)
    searchParams.set('showStories', currentValues.showStoriesOnly)
    searchParams.set('categories', currentValues.currentCategories)
    searchParams.set('subcategories', currentValues.currentSubcategories)
    var newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString()
    history.replaceState(null, '', newRelativePathQuery)
  }
}

/**
 *
 * Calls the Chart function to draw the chart with the current dataset.
 *
 */

function drawChart() {
  currentValues.currentCountry = Dropdown.getCurrent(countrySelector)
  const currentYears = timeline.getCurrentDate()
  // currentValues.startYear = Dropdown.getCurrent(startYearSelector)
  // currentValues.endYear = Dropdown.getCurrent(endYearSelector)
  currentValues.startYear = currentYears[0]
  currentValues.endYear = currentYears[1]
  currentValues.currentCategories = Checkbox.getCurrent(
    categorySelector,
    '.parent'
  )
  currentValues.currentSubcategories = Checkbox.getCurrent(
    categorySelector,
    '.child'
  )
  currentValues.showStoriesOnly = getShowStoryValue()

  setURLParameters()

  // Filter data based on selected filter functions (eg. year, category, type, etc.)
  let dataset = data.values.filter((d) => {
    // Filter by date, taking into account items that span multiple years
    let showBasedOnYear = false
    if (d.endYear) {
      if (
        (d.startYear >= currentValues.startYear &&
          d.startYear <= currentValues.endYear) ||
        (d.endYear >= currentValues.startYear &&
          d.endYear <= currentValues.endYear) ||
        (d.startYear <= currentValues.startYear &&
          d.endYear >= currentValues.endYear)
      ) {
        showBasedOnYear = true
      }
    } else {
      if (
        d.startYear >= currentValues.startYear &&
        d.startYear <= currentValues.endYear
      ) {
        showBasedOnYear = true
      }
    }

    if (
      (currentValues.currentCountry.includes(d.country) ||
        currentValues.currentCountry.includes('all')) &&
      showBasedOnYear &&
      (currentValues.currentCategories.includes(d.category) ||
        currentValues.currentSubcategories.includes(d.type + d.category))
    ) {
      // Only apply this conditional if showStoriesOnly = true
      if (currentValues.showStoriesOnly) {
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
