function binarySearch(arr, value){
  let answer = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      answer = i;
    }
  }
  if(answer >= 0){
    return answer;
  } else {
    return -1;
  }
}

module.exports = binarySearch;