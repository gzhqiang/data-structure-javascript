const PriorityQueue = require('./PriorityQueue')

const pq = new PriorityQueue()
pq.enqueue('zhangsan', 1)
pq.enqueue('lisi', 0)
pq.enqueue('zqguo', -1)
console.log(pq.toString())
