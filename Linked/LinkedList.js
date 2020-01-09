class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null
    this.current = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      this.current = this.head
      while (this.current.next) {
        this.current = this.current.next
      }
      this.current.next = node
    }
    this.length++
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let previous
      let index = 0
      if (position === 0) {
        this.head = this.head.next
      } else {
        this.current = this.head
        while (index < previous) {
          previous = this.current
          this.current = this.current.next
          index++
        }
        previous.next = this.current.next
      }
      this.length--
    }
  }

  insert(position, element) {
    const node = new Node(element)
    let index = 0
    let previous = null
    if (position > -1 && position < this.length + 1) {
      if (position === 0) {
        this.current = this.head
        this.head = node
        node.next = this.current
      } else {
        this.current = this.head
        while (index < position) {
          previous = this.current
          this.current = this.current.next
          index++
        }
        previous.next = node
        node.next = this.current
      }
    }
    this.length++
  }

  indexOf(element) {
    let index = 0
    if (this.length === 0) {
      return -1
    }
    this.current = this.head
    while (index < this.length) {
      if (this.current.element === element) {
        return index
      }
      index++
      this.current = this.current.next
    }
    return -1
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  getHead() {
    return this.head
  }

  traversal() {
    this.current = this.head
    while (this.current) {
      console.log(this.current.element)
      this.current = this.current.next
    }
  }
}
