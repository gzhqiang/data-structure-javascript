/**
 *
 * 一次冒泡排序, 最大或最小值会在末尾
 * @param {*} arr
 * @param {*} tailIdx
 */
function bubble(arr, tailIdx) {
  if (arr.length <= 1) return
  for (let i = 0; i < tailIdx; i++) {
    if (arr[i] > arr[i + 1]) {
      ;[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
    }
  }
}

/**
 *
 * arr.length - 1次冒泡即可  时间复杂度O(n^2)
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    bubble(arr, arr.length - 1)
  }
}

const arr = [5, 4, 3, 2, 1]
console.log(arr)
bubbleSort(arr)
console.log(arr)
