const Queue = require('./Queue')

function drummingFlowers(arr = [], num = 2) {
  const queue = new Queue()
  if (arr.length === 0) {
    return
  }
  for (const item of arr) {
    queue.enqueue(item)
  }
  console.log(queue.toString())

  let index = 1
  while (queue.size() > 1) {
    const item = queue.dequeue()
    if (index % num !== 0) {
      queue.enqueue(item)
    }
    index = index === num ? 1 : index + 1
    // index += 1
  }
  console.log(queue.size())
  return queue.front()
}

const item = drummingFlowers([1123, 2, 23, 34, 45, 2321])
console.log(item)
