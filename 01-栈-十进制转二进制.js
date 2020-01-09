const Stack = require('./Stack.js')

function dec2bin(num) {
  const stack = new Stack()
  while (num >= 1) {
    const residue = num % 2
    stack.push(residue)
    num = Math.floor(num / 2)
    console.log(num)
  }
  let rv = ''
  while (!stack.isEmpty()) {
    rv += stack.pop()
  }
  return Number.parseInt(bin)
}

const bin = dec2bin(12)
console.log(bin)
