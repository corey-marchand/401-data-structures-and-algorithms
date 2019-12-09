const input = [1, 4, 8, 20];

function insertShiftArray(arr, position){
  let length = input.length;
  for(let i = length - 1; i >= position; i--){
    input[length] = input[i];
    length--;
  };
    input[position] = arr;
};
