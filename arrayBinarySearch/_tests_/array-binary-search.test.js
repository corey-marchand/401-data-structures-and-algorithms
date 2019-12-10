let binarySearchFunction = require('../array-binary-search');

describe('Test 1 ', () => {
  test('The function should return the value of index when it has a match', () => {
    expect(binarySearchFunction(firstTest, searchValue1)).toStrictEqual(2);
  });
});

describe('Test 2', () => {
  test('The function should return -1 when there is no match', () => {
    expect(binarySearchFunction(secondTest, searchValue2)).toStrictEqual(-1);
  });
});