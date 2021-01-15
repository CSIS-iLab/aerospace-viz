const d3 = Object.assign({}, require('d3-fetch'))

function parseData({ src }) {
  const valuePromise = fetchCSV(src)

  let data = Promise.all([valuePromise]).then((res) => {
    const [valueData] = res

    console.log(valueData)

    const years = valueData
      .filter((d) => d.year > 0)
      .map((d) => d.year)
      .sort()

    const categories = [...new Set(valueData.map((d) => d.category))]
      .filter((d) => d != '')
      .sort()
    const countries = [...new Set(valueData.map((d) => d.country))]
      .filter((d) => d != '')
      .sort()
    // const types = [...new Set(valueData.map((d) => d.type))].filter(d => d != "").sort()

    let subcategories = []
    valueData.forEach((action) => {
      if (!action.category) {
        return
      }

      // If this subcategory doesn't exist, make it
      subcategories[action.category] = subcategories[action.category] || {
        name: action.category,
        types: [],
      }

      // If this type doesn't exist within this subcategory, create it
      subcategories[action.category].types[action.type] =
        subcategories[action.category].types[action.type] ||
        subcategories[action.category].types.push(action.type)
    })

    let dataset = {
      years: [years[0], years[years.length - 1]],
      values: valueData,
      categories,
      subcategories,
      countries,
    }

    console.log(dataset)

    return dataset
  })

  return data
}

const stringFields = [
  'category',
  'type',
  'storyBool',
  'learnMore',
  'learnMoreURL',
  'country',
  'startDate',
  'endDate',
  'title',
  'source',
]
// const booleanFields = ['storyBool', 'learnMore']

// function stringToBool(val) {
//   return (val + '').toLowerCase() === 'true';
// }

function fetchCSV(src) {
  // return d3.csv(src)
  return d3.csv(src, (d, index) => {
    for (let i in d) {
      if (!stringFields.includes(i)) {
        d[i] = +d[i]
      }
    }

    d.id = index
    d.year = +d.startYear // Use on whole integers

    return d
  })
}

export { parseData }
