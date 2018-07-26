const parseData = {
  metaInfo({ data }) {
    // data.map(d => (d.launches = []))
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
      d.ytd_total = data
        .filter(datum => datum.id == d.id && datum.year <= d.year)
        .map(datum => datum.total)
        .reduce((total, num) => total + num, 0)

      // meta[d.id].launches.push(d)
      // return d
    })

    let launchesByYear = {}
    const years = Array.from(new Set([...data.map(d => d.year)])).sort()
    years.forEach(year => {
      launchesByYear[year] = data
        .filter(d => d.year == year && d.year_added_to_map <= year)
        .sort((a, b) => a.id.localeCompare(b.id))
    })

    const categories = Array.from(new Set([...data.map(d => d.status)])).sort()

    let dataObj = {
      years,
      launchesByYear,
      categories
    }

    return dataObj
  }
}

export default parseData
