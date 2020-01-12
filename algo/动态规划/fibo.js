function fibo(n) {
  if (n <= 0) {
    return 0
  }
  if (n <= 1) {
    return 1
  }
  // let arr = [0, 1]
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    // arr[i] = arr[i - 1] + arr[i - 2]
    b = a + b
    a = b - a
  }
  return b
  // return arr[n]
}

const res = fibo(10)
console.log(res)
