function swap(arr, a, b) {
  if (a === b) return
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

/**
 *
 * 时间复杂度O(nlg(n))
 * @param {*} arr
 * @returns
 */
function heapSort(arr) {
  if (arr.length <= 1) return arr
  else {
    // 若有多个，则建最大堆 (build max heap)
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      maxHeapify(arr, i, arr.length)
    }
    // 堆排序
    for (let j = 0; j < arr.length; j++) {
      // 将第一个数和最后一个数交换
      swap(arr, 0, arr.length - 1 - j)
      maxHeapify(arr, 0, arr.length - 2 - j)
    }
  }
  return arr
}

// 完全二叉树
// 1, 2, 4, 8 2^(n-1)
// 根层级 n = 0
function maxHeapify(arr, index, heapSize) {
  let iMax = index
  let iLeft = 2 * index + 1
  let iRight = 2 * (index + 1)

  if (iLeft < heapSize && arr[iMax] < arr[iLeft]) {
    iMax = iLeft
  }
  if (iRight < heapSize && arr[iMax] < arr[iRight]) {
    iMax = iRight
  }

  if (iMax !== index) {
    swap(arr, iMax, index)
    maxHeapify(arr, iMax, heapSize)
  }
}

const arr = [123, 23, 234, -123, 3]
const res = heapSort(arr)
console.log(res)
