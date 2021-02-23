// Implement Merge Sort

function merge(array1, array2) {
  let merge =[]
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < array1.length && rightIndex < array2.length) {
    let leftEl = array1[leftIndex]
    let rightEl = array2[rightIndex]

    if (leftEl < rightEl) {
      merge.push(leftEl)
      leftIndex++
    } else {
      merge.push(rightEl)
      rightIndex++
    }

  } 
  return [...merge, ...array1.slice(leftIndex), ...array2.slice(rightIndex)]
}

function mergeSort(array) {
  if (array.length <= 1) return array
  
  let midIndex = Math.floor(array.length/2)
  let left = array.slice(0, midIndex)
  let right = array.slice(midIndex)

  let leftSort = mergeSort(left)
  let rightSort = mergeSort(right)

  return merge(leftSort, rightSort)
  
}

module.exports = {
  merge,
  mergeSort
};
