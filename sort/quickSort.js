/**
 *
 * 快速排序
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivotVal = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  for (const val of arr) {
    if (val < pivotVal) {
      left.push(val)
    } else {
      right.push(val)
    }
  }

  return quickSort(left).concat([pivotVal], quickSort(right))
}

const arr = [1, 222, -123, 23112, 2]
const res = quickSort(arr)
console.log(res)
