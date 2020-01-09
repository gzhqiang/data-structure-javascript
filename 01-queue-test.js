const Queue = require('./Queue.js')

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.toString())
