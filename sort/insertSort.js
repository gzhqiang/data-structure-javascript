function insert(arr, idx) {
  if (idx > arr.length) return
  // for (let i = 0; i < idx; i++) {
  //   if (arr[idx] < arr[i]) {
  //     ;[arr[idx], arr[i]] = [arr[i], arr[idx]]
  //   }
  // }
  let i = idx
  const key = arr[idx]
  while (key < arr[i - 1]) {
    arr[i] = arr[i - 1]
    arr[i] = i--
    if (i === 0) {
      break
    }
  }
  arr[i] = key
}

/**
 *
 * 时间复杂度O(n^2)
 * @param {*} arr
 */
function insertionSort(arr) {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i)
  }
}

const arr = [5, 4, 3, 2, 1, -123]
console.log(arr)
insertionSort(arr)
console.log(arr)
