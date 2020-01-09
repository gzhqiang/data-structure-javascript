/* 
实现双向链表
*/

class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.current = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    if (this.length === 0) {
      // 第一个元素
      this.head = node
      node.prev = null
    } else {
      this.current = this.head
      while (this.current.next) {
        this.current = this.current.next
      }
      this.current.next = node
      node.prev = this.current
    }
    this.tail = node
    this.length++
  }

  isInvalidPosition(position) {
    return (
      position === 0 ||
      (position > 0 && position <= this.length) ||
      (position < 0 && Math(position) <= this.length + 1)
    )
  }

  /**
   *
   * @param {位置} position
   * @param {元素} element
   */
  insert(position, element) {
    if (!this.isInvalidPosition(position)) {
      console.log('无效的position:' + position)
      return
    }
    position = position < 0 ? Math(position) - 1 : position
    const node = new Node(element)
    if (position === 0) {
      this.head.prev = node
      node.next = this.head
      node.prev = null
      this.head = node
      return
    }
    this.current = this.head
    let previous = null
    let index = 0
    while (index++ < position) {
      previous = this.current
      this.current = this.current.next
    }
    node.next = this.current
    node.prev = previous
    previous.next = node
    this.length++
  }

  /**
   * 获取指定位置的元素
   * @param {位置} position
   */
  get(position) {
    position = position < 0 ? Math(position) - 1 : position
    if (position >= 0 && position < this.length) {
      let index = 0
      this.current = this.head
      while (index++ < position) {
        this.current = this.current.next
      }
      return this.current
    }
  }

  toString() {
    let rv = ''
    this.current = this.head
    while (this.current) {
      rv += this.current.element
      this.current = this.current.next
    }
    // 倒叙遍历
    // this.current = this.tail
    // while (this.current) {
    //   rv += this.current.element
    //   this.current = this.current.prev
    // }
    return rv
  }
}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.append('hello')
doubleLinkedList.append('world')
doubleLinkedList.append('JavaScript')
doubleLinkedList.insert(0, 'Python')
doubleLinkedList.insert(3, 'Java')
console.log(doubleLinkedList.toString())
// Python hello world Java JavaScript
console.log(doubleLinkedList.get(3))
