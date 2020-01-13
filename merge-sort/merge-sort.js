'use strict';


function mergeSort(arr){
  let n = arr.length;

  if(n > 1){
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    return merge(left, right, arr);
  } else {
    return [];
  }
}

function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i+1;
    } else {
      arr[k] = right[j];
      j = j+1;
    }
    k = k+1;
  }

  if(i === left.length){
    while(j < right.length){
      arr[k] = right[j];
      k++;
      j++;
    }
  } else if(j === right.length) {
    while(i < left.length){
      arr[k] = left[i];
      k++;
      i++;
    }
  }
  return arr;
}

module.exports = mergeSort;
