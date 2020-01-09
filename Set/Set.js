class Set {
  constructor() {
    this.items = {}
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }
}
