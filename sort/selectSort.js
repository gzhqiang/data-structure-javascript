/**
 *
 * 一次选择, 最大值会出现在末尾
 * @param {*} arr
 * @param {*} tailIdx
 */
function select(arr, tailIdx) {
  let maxIdx = tailIdx
  for (let i = 0; i < tailIdx; i++) {
    if (arr[maxIdx] < arr[i]) {
      ;[arr[maxIdx], arr[i]] = [arr[i], arr[maxIdx]]
    }
  }
}

/**
 *
 * 选择排序, 需要arr.length-1轮选择
 * 时间复杂度为O(n^2)
 * @param {*} arr
 */
function selectionSort(arr) {
  if (arr.length <= 1) return
  for (let i = 0; i < arr.length - 1; i++) {
    select(arr, arr.length - 1 - i)
  }
}

const arr = [5, 4, 3, 2, 1, -123]
console.log(arr)
selectionSort(arr)
console.log(arr)
