const d3 = Object.assign({}, require('d3-fetch'))

function parseData({ src }) {
  const quantityPromise = fetchCSV(src.quantity)

  let data = Promise.all([quantityPromise, valuePromise]).then((res) => {
    const [quantityData] = res

    const years = [...new Set(quantityData.map((d) => +d.year))].sort(
      (a, b) => b - a
    )

    let dataset = {}

    return dataset
  })

  return data
}

const stringFields = ['element', 'country', 'iso', 'type', 'article']

function fetchCSV(src) {
  return d3.csv(src, (d) => {
    for (var i in d) {
      if (!stringFields.includes(i)) {
        d[i] = +d[i]
      }
    }

    return d
  })
}

export { parseData }
