module.exports = function Stack() {
  items = []

  // this.push = item => {
  //   items.push(item)
  // }
  Stack.prototype.push = item => {
    items.push(item)
  }

  Stack.prototype.pop = () => {
    return items.pop()
  }

  Stack.prototype.peek = () => {
    return items[items.length - 1]
  }

  Stack.prototype.isEmpty = () => {
    return items.length === 0
  }

  Stack.prototype.size = () => {
    return items.length
  }

  Stack.prototype.toString = () => {
    return items.join(' ')
  }
}

/* const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack) // 这样不会调用toString方法
console.log(stack.toString())
 */

//  Leetcode: 20,155,232,844,224,682,496.
