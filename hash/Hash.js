class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class HashTableWithChaining {
  constructor(size = 10) {
    this.table = new Array(size)
  }

  isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return num !== 1
  }

  computeHash(string) {
    let H = this.findPrime(this.table.length)
    let total = 0
    for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i)
    }
    return total % this.table.length
  }

  // 取模
  findPrime(num) {
    while (true) {
      if (this.isPrime(num)) {
        break
      }
      num += 1
    }
    return num
  }

  put(key, value) {
    let index = this.computeHash(key)
    let node = new Node(key, value)
    if (this.table[index]) {
      node.next = this.table[key]
    }
    this.table[index] = node
  }

  remove(item) {}

  get(key) {
    let index = this.computeHash(key)
    return this.table[index].value
  }

  traverse(fn) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        let current = this.table[i]
        while (current) {
          fn(current)
          current = current.next
        }
      }
    }
  }
}

const hash = new HashTableWithChaining(10)
hash.put('name', 'rick')
hash.put('age', 12)
console.log(hash.get('name'))
