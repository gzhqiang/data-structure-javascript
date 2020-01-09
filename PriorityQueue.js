class PriorityElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

module.exports = class Priority {
  constructor() {
    this.items = []
  }

  enqueue(item, priority) {
    const priorityElement = new PriorityElement(item, priority)
    if (this.items.length === 0) {
      this.items.push(priorityElement)
      return
    }
    let added = false
    for (let i = 0; i < this.items.length; i++) {
      const priority = this.items[i].priority
      if (priorityElement.priority < priority) {
        this.items.splice(i, 0, priorityElement)
        added = true
        break
      }
    }
    if (!added) {
      this.items.push(priorityElement)
    }
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    let rv = ''
    for (const item of this.items) {
      rv += ` ${item.element}`
    }
    return rv
  }
}
