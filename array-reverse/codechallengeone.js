const incomingArr = [1, 2, 3, 4, 5, 6];
const reversedArr = [];

function reverseArr(arr){
  while(arr.length){
    reverseArr.push(arr.pop());
  }
};

reverseArr(incomingArr);