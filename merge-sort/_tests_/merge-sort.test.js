const mergeSort = require('../merge-sort.js');

describe('testing mergeSort function', () => {
  it('Can successfully sort an unsorted array', () =>{
    const test = [4, 6, 2, 1, 5];
    expect(mergeSort(test)).toEqual([1, 2, 4, 5, 6]);
  });

  it('Wont mess up an already sorted array', () =>{
    const test = [1, 2, 4, 5, 6];
    expect(mergeSort(test)).toEqual([1, 2, 4, 5, 6]);
  });

  it('Can sort arrays with multiple values', () =>{
    const test = [ 1, 1, 4, 3];
    expect(mergeSort(test)).toEqual([1, 1, 3, 4]);
  });
});

