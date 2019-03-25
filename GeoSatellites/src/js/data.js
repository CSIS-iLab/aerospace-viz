import * as d3Fetch from 'd3-fetch'

const knownCountries = ['US', 'China', 'Russia']

async function getData(satelliteURL, geoSatellitesURL) {
  const satellitePromise = d3Fetch.csv(satelliteURL)
  const geoSatellitesPromise = d3Fetch.csv(geoSatellitesURL)

  let data = Promise.all([satellitePromise, geoSatellitesPromise]).then(res => {
    const [satelliteData, geoSatellitesData] = res

    let filteredSatellites = filterSatellites(satelliteData)
    filteredSatellites.forEach(d => {
      formatSatelliteData(d, true)
    })

    let filteredGeoSatellites = filterSatellites(geoSatellitesData)
    filteredGeoSatellites.forEach(d => {
      formatSatelliteData(d, false)
    })

    console.log(filteredSatellites)
    console.log(filteredGeoSatellites)

    const timestamps = Array.from(
      new Set([...filteredSatellites.map(d => d.timestamp)])
    )

    console.log(timestamps)

    const satellites = Array.from(
      new Set([...filteredSatellites.map(d => d.sat_name)])
    )

    let dataset = {
      perp: new Map(),
      geoSatellites: filteredGeoSatellites
    }

    timestamps.forEach((timestamp, i) => {
      let entries = []
      satellites.forEach(satellite => {
        const result = filteredSatellites.filter(
          d => d.timestamp === timestamp && d.sat_name === satellite
        )

        if (!result.length) {
          return
        }

        entries.push(result[0])
      })
      dataset.perp.set(new Date(timestamp).getTime(), entries)
    })

    dataset.perp = new Map(Array.from(dataset.perp).sort((a, b) => a[0] - b[0]))

    return dataset
  })

  console.log(data)

  return data
}

function filterSatellites(satellites) {
  return satellites.filter(d => d.include === 'TRUE')
}

function formatSatelliteData(d, isPerp) {
  d.date = new Date(d.timestamp).getTime()
  d.include = d.include == 'TRUE' ? true : false
  d.longitude = +d.longitude
  d.x_coord = +d.x_coord
  d.y_coord = +d.y_coord
  d.country = d.sat_operator
  d.long_string = d.long_string.replace('�', '&#176;')

  if (d.country.includes('U.S.')) {
    d.country = 'US'
  }

  if (!knownCountries.includes(d.country)) {
    d.country = 'Other'
  }

  d.is_perp = isPerp
  d.is_geo = !isPerp

  return d
}

async function getWorldData() {
  let world = d3Fetch.json('./data/world-110m.json').then(data => data)

  return world
}

export { getData, getWorldData }
