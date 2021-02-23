// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp

}

function selectionSort(list) {
  // your code here  
  for (let i = 0; i < list.length - 1; i++) {
    let mid = i
    for (let j = i + 1; j < list.length; j++) {   
      if (list[j] < list[mid]) {
        mid = j
        }

      }
    swap(list, mid, i)   
  }
}

module.exports = {
  selectionSort,
  swap
};
