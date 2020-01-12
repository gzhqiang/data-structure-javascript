let res = []

const reverseString = function(s) {
  if (s.length === 0) {
    s = res.join('')
    console.log(s)
    return
  }
  res.push(s[s.length - 1])
  reverseString(s.slice(0, s.length - 1))
}

reverseString('hello')
