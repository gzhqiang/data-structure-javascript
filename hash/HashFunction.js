/* 
hash函数
拉链法
 */
function hashFunction(str) {
  let rv = 0
  for (let i = 0; i < str.length; i++) {
    
    rv+=(str[i].charCodeAt()*(i+1))
    
  }
  return rv % 2069
}
console.log(hashFunction('abcdef'))
console.log(hashFunction('bcdefa'))