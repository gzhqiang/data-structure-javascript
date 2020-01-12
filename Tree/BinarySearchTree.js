class Node {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      !root.left ? (root.left = newNode) : this.insertNode(root.left, newNode)
    } else {
      !root.right
        ? (root.right = newNode)
        : this.insertNode(root.right, newNode)
    }
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  removeNode(currentNode, value) {
    if (!currentNode) {
      // 删除失败
      return false
    }
    if (value < currentNode.value) {
      console.log('<')
      currentNode.left = this.removeNode(currentNode.left, value)
      return currentNode
    } else if (value > currentNode.value) {
      console.log('>')
      currentNode.right = this.removeNode(currentNode.right, value)
      return currentNode
    } else {
      console.log('=')
      // 左右子节点都没有
      if (!currentNode.left && !currentNode.right) {
        currentNode = null
        return currentNode
      }
      console.log('到这里了吗?')
      if (currentNode.left) {
        currentNode = current.left
        return currentNode
      }
      if (currentNode.right) {
        currentNode = currentNode.right
        return currentNode
      }
    }
  }

  remove(value) {
    if (!this.root) {
      console.log('the tree is empty')
      return false
    } else {
      return this.removeNode(this.root, value)
    }
  }

  preOrder(root) {
    // console.log(root)
    if (!root) {
      return 'Tree is empty'
    } else {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
}

const bst = new BST()
bst.insert(5)
bst.insert(1)
bst.insert(3)
bst.insert(2)
// console.log(bst.root)
bst.preOrder(bst.root)
bst.remove(2)
console.log('-----------------')
bst.preOrder(bst.root)
