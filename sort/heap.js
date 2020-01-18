function getParentPos(idx) {
  return Math.floor((idx - 1) / 2)
}

function getLeftChildPos(idx) {
  return 2 * idx - 1
}

function getRightChildPos(idx) {
  return 2 * idx + 1
}
