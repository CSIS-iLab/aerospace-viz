const parseData = {
  metaInfo({ data }) {
    const obj = data.reduce(
      (o, spaceport) => ({ ...o, [spaceport.space_track_code]: spaceport }),
      {}
    )
    return obj
  }
}

export default parseData
