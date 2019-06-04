const parseData = {
  metaInfo({ data }) {
    data.map(d => ((d.launches = []), (d.inclinations = [])))
    const obj = data.reduce(
      (o, spaceport) => ({ ...o, [spaceport.space_track_code]: spaceport }),
      {}
    )
    return obj
  },
  launches({ data, meta }) {
    data.map(d => {
      d.name = meta[d.id].name
      d.latitude = meta[d.id].latitude
      d.longitude = meta[d.id].longitude
      d.operator = meta[d.id].operator
      d.year_added_to_map = meta[d.id].year_added_to_map
      d.human_launch_year = meta[d.id].human_launch_year
      d.first_launch = meta[d.id].first_launch
      d.first_satellite = meta[d.id].first_satellite
      d.lat_string = meta[d.id].lat_string
      d.long_string = meta[d.id].long_string
      d.ytd_total = data
        .filter(datum => datum.id == d.id && datum.year <= d.year)
        .map(datum => datum.total)
        .reduce((total, num) => total + num, 0)
      d.overall_total = data
        .filter(datum => datum.id == d.id)
        .map(datum => datum.total)
        .reduce((total, num) => total + num, 0)

      meta[d.id].launches.push(d)
      return d
    })

    let launchesByYear = {}
    let totalPerYear = {}
    const years = Array.from(new Set([...data.map(d => d.year)])).sort()
    years.forEach(year => {
      launchesByYear[year] = data
        .filter(d => d.year == year && d.year_added_to_map <= year)
        .sort((a, b) => b.overall_total - a.overall_total)
      totalPerYear[year] = launchesByYear[year]
        .map(d => d.total)
        .reduce((total, num) => total + num, 0)
    })

    const categories = Array.from(new Set([...data.map(d => d.status)])).sort()

    let dataObj = {
      years,
      launchesByYear,
      totalPerYear,
      categories
    }

    return dataObj
  },
  inclinations({ data, meta }) {
    const spaceports = Object.keys(meta)
    let inclinations = []
    for (var i = 0; i <= 180; i += 10) {
      inclinations.push(i)
    }

    spaceports.forEach(spaceport => {
      inclinations.forEach(inclination => {
        let total = data.filter(
          d =>
            d.id == spaceport &&
            d.inclinations >= inclination &&
            d.inclinations < inclination + 10
        ).length
        meta[spaceport].inclinations.push({
          inclination: inclination,
          total: total
        })
      })
    })
  }
}

export default parseData
