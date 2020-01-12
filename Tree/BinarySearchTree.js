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
    // 时间复杂度O(lgn)
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
      if (currentNode.left) {
        currentNode = currentNode.left
        return currentNode
      }
      if (currentNode.right) {
        currentNode = currentNode.right
        return currentNode
      }
    }
  }

  remove(value) {
    // 时间复杂度O(lgn)
    if (!this.root) {
      console.log('the tree is empty')
      return false
    } else {
      const root = this.removeNode(this.root, value)
      if (!Object.is(root, this.root)) {
        this.root = root
      }
    }
  }

  findMinNode(root) {
    // 时间复杂度O(lgn)
    if (!root.left) {
      return root
    } else {
      return this.findMinNode(root.left)
    }
  }

  findTreeMin() {
    return this.findMinNode(this.root).value
  }

  searchNode(root, value) {
    if (!root) {
      return -1
    }

    if (value < root.value) {
      return this.searchNode(root.left, value)
    } else if (value > root.value) {
      return this.searchNode(root.right, value)
    } else {
      return root
    }
  }

  search(value) {
    // 时间复杂度 O(lgn)
    if (!this.root) {
      console.log('空树, 查找失败')
      return -1
    } else {
      return this.searchNode(this.root, value)
    }
  }

  /**
   *
   * 前序遍历
   * @param {根节点} root
   * @returns
   * @memberof BST
   */
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

  /**
   * 中序遍历 得到的是从大到小或者从小大小的顺序, 是最有用的一种遍历方式。
   * @param {根节点} root
   */
  inOrder(root) {
    if (!root) {
      // console.log('Tree is empty')
      return 'Tree is empty'
    } else {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  /* 
  
  const inorderTraversal = function(root) {
    const result = []
    const stack = []
    while(stack.length || root) {
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            const node = stack.pop()
            result.push(node.val)
            root = node.right
        }
    }
    return result
};
  */

  /**
   * 后续遍历
   * @param {根节点} root
   */
  postOrder(root) {
    if (!root) {
      return 'Tree is empty'
    } else {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(12)
bst.insert(4)
bst.insert(6)
bst.insert(11)
bst.insert(14)
// console.log(bst)
// bst.inOrder(bst.root)
bst.postOrder(bst.root)
// console.log(bst.root)
// bst.preOrder(bst.root)
// bst.remove(5)
// console.log('-----------------')
// bst.preOrder(bst.root)

// console.log(bst.findTreeMin())
// console.table(bst.search(11))
