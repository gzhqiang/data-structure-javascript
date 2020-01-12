class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * 待改进的点：加入哨兵节点简化边界操作。
 */
module.exports = class LinkedList {
  constructor() {
    this.head = null
    this.current = null
    this.length = 0
  }

  append(element) {
    // O(n)
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
    // O(n)
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
    // O(n)
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
    // O(n)
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
    // O(1)
    return this.length
  }

  isEmpty() {
    // O(1)
    return this.length === 0
  }

  getHead() {
    // O(1)
    return this.head
  }

  traversal(head) {
    // O(n)
    this.current = head
    while (this.current) {
      console.log(this.current.element)
      this.current = this.current.next
    }
  }

  reverse() {
    // O(n)
    this.current = this.head
    let newLinkedList = null
    let previous = null
    while (this.current) {
      newLinkedList = this.current
      this.current = this.current.next
      newLinkedList.next = previous
      previous = newLinkedList
    }
    return newLinkedList
  }
}
