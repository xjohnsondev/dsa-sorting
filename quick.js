/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, idx1, idx2) => {
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    };
  
    let pivotValue = arr[start];
    let swapIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
  
    // Move the pivot to its final place
    swap(arr, start, swapIndex);
  
    // Return the index where the pivot value is now located
    return swapIndex;
  }
  
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
  
      // Recursively sort the subarrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
  }
  
  module.exports = { pivot, quickSort };