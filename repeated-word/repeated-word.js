var arr = ['THis is my test sample this is my test sample'];


function repeatWord(str) {
  var sorted_arr = str.slice().sort();
  var results = [];
  for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  console.log(results);
}


console.log(repeatWord(arr));
