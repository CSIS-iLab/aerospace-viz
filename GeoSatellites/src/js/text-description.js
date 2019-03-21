const TextDescription = {
  el: document.getElementById('description'),
  setDesc(text) {
    this.el.textContent = text
  },
  convertKeys(obj) {
    let modified = {}
    for (let key in obj) {
      modified[new Date(key).getTime()] = obj[key]
    }
    return modified
  },
  getClosestDescription(dates, currentDate) {
    return Math.max.apply(null, dates.filter(d => d <= currentDate))
  }
}

export default TextDescription
