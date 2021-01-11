const d3 = Object.assign({}, require('d3-fetch'))

function parseData({ src }) {
  const valuePromise = fetchCSV(src)

  let data = Promise.all([valuePromise]).then((res) => {
    const [valueData] = res

    console.log(valueData)

    const years = valueData
      .filter(d => d.year > 0)
      .map((d) => d.year)
      .sort()

    const categories = [...new Set(valueData.map((d) => d.category))].filter(d => d != "").sort()

    let dataset = {
      years: [years[0], years[years.length - 1]],
      values: valueData,
      categories
    }

    console.log(dataset)

    return dataset
  })

  return data
}

const stringFields = ['category', 'type', 'storyBool', 'learnMore', 'learnMoreURL', 'country', 'title', 'source']

function fetchCSV(src) {
  // return d3.csv(src)
  return d3.csv(src, (d, i) => {
    for (var i in d) {
      if (!stringFields.includes(i)) {
        d[i] = +d[i]
      }
    }

    d.id = i
    d.year = +d.startYear // Use on whole integers

    return d
  })
}

export { parseData }
