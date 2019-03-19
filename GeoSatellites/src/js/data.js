import * as d3Fetch from 'd3-fetch'

async function parseData(url, current_year) {
  let data = await d3Fetch
    .csv(url, d => {
      d.date = new Date(d.timestamp).getTime()
      d.include = d.include == 'TRUE' ? true : false
      d.longitude = +d.longitude
      d.x_coord = +d.x_coord
      d.y_coord = +d.y_coord
      return d
    })
    .then(data => {
      data = data.filter(d => d.include)

      const timestamps = Array.from(
        new Set([...data.map(d => d.timestamp)])
      ).sort((a, b) => a - b)

      const satellites = Array.from(new Set([...data.map(d => d.sat_name)]))

      let dataset = new Map()
      // let dataset = []

      timestamps.forEach(timestamp => {
        let entries = []
        satellites.forEach(satellite => {
          entries.push(
            data.filter(
              d => d.timestamp === timestamp && d.sat_name === satellite
            )[0]
          )
          // dataset.push(
          //   data.filter(
          //     d =>
          //       d.timestamp === timestamp && d.sat_name === satellite
          //   )[0]
          // )
        })
        dataset.set(new Date(timestamp).getTime(), entries)
      })
      return dataset
    })

  return data
}

export default parseData
