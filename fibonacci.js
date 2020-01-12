function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const rv = fibonacci(6)
console.log(rv)
