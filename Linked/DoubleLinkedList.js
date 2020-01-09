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
  /**
   * Creates an instance of DoubleLinkedList.
   * @memberof DoubleLinkedList
   */
  constructor() {
    this.head = null
    this.tail = null
    this.current = null
    this.length = 0
  }

  /**
   *
   *
   * @param {要添加的元素} element
   * @memberof DoubleLinkedList
   */
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

  /**
   *
   * 判断position是否有效
   * @param {*} position
   * @returns
   * @memberof DoubleLinkedList
   */
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
    position = this._transferPosition(position)
    const node = new Node(element)
    if (position === 0) {
      this.head.prev = node
      node.next = this.head
      node.prev = null
      this.head = node
      this.length++
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
    // 处理tail指针
    if (Object.is(position, this.length)) {
      this.tail = node
    }
    this.length++
  }

  /**
   * 获取指定位置的元素
   * @param {位置} position
   */
  get(position) {
    position = this._transferPosition(position)
    if (position >= 0 && position < this.length) {
      let index = 0
      this.current = this.head
      while (index++ < position) {
        this.current = this.current.next
      }
      return this.current
    }
  }

  /**
   *
   * 查找指定的元素是否在链表中, 在返回对应索引, 不在则返回-1
   * @param {指定的元素} element
   * @memberof DoubleLinkedList
   */
  indexOf(element) {
    if (this.isEmpty()) {
      return -1
    }
    this.current = this.head
    let index = 0
    while (this.current) {
      if (this.current.element === element) {
        return index
      }
      index++
      this.current = this.current.next
    }
    return -1
  }

  _transferPosition(position) {
    return position < 0 ? this.length - Math.abs(position) : position
  }

  /**
   *
   * 更新指定位置的元素
   * @param {索引} position
   * @param {元素} element
   * @memberof DoubleLinkedList
   */
  update(position, element) {
    position = this._transferPosition(position)
    if (position >= 0 && position < this.length) {
      this.current = this.head
      let index = 0
      while (index++ < position) {
        this.current = this.current.next
      }
      this.current.element = element
      return true
    }
    return false
  }

  /**
   * 移除指定位置的元素
   * @param {索引} position
   */
  removeAt(position) {
    position = this._transferPosition(position)
    if (position >= 0 && position < this.length) {
      this.current = this.head
      if (position === 0) {
        const nextEle = this.current.next
        nextEle.prev = null
        this.head = nextEle
        this.length--
        if (this.length === 0) {
          this.tail = null
        }
        return true
      }
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = this.current
        this.current = this.current.next
      }
      const nextEle = this.current.next
      if (nextEle === null) {
        this.tail = previous
      } else {
        nextEle.prev = previous
      }
      previous.next = nextEle

      this.length--
    }
    return false
  }

  toString() {
    let rv = ''
    this.current = this.head
    while (this.current) {
      rv = rv + ' ' + this.current.element
      this.current = this.current.next
    }
    return rv.trim()
  }

  forwardString() {
    let rv = ''
    this.current = this.head
    while (this.current) {
      rv = rv + ' ' + this.current.element
      this.current = this.current.next
    }
    return rv.trim()
  }

  backwardString() {
    let rv = ''
    this.current = this.tail
    while (this.current) {
      rv = rv + ' ' + this.current.element
      this.current = this.current.prev
    }
    return rv.trim()
  }

  isEmpty() {
    return Object.is(this.length, 0)
  }

  size() {
    return this.length
  }
}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.append('hello')
doubleLinkedList.append('world')

doubleLinkedList.append('JavaScript')
// doubleLinkedList.insert(0, 'Python')
// doubleLinkedList.insert(3, 'Java')
// console.log(doubleLinkedList.toString())
// Python hello world Java JavaScript
// console.log(doubleLinkedList.get(3))
// console.log(doubleLinkedList.indexOf('Python'))
// const isUpdate = doubleLinkedList.update(-1, 'elixir')
// console.log(isUpdate)
// console.log(doubleLinkedList.toString())
doubleLinkedList.removeAt(-2)
// console.log(doubleLinkedList.toString())
