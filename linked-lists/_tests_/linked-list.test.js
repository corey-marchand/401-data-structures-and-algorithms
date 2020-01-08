'use strict';

const linkedList = require('../linked-list.js');
let newLL = new linkedList();

describe('testing LinkedLists', () => {
  beforeEach(() => {
    newLL = new linkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(newLL.head).toBe(null);
  });

  it('Can properly insert into the linked list', () => {
    newLL.append(1);
    expect(newLL.size).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    newLL.append(1);
    newLL.append(2);
    expect(newLL.head.value).toEqual(1);
    expect(newLL.head.next.value).toEqual(2);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    newLL.append(3);
    newLL.append(4);
    newLL.append(5);
    newLL.append(6);
    newLL.append(7);
    expect(newLL.size).toEqual(5);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    newLL.append(2);
    newLL.append(3);
    expect(newLL.includes(2)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    newLL.append(4);
    newLL.append(5);
    expect(newLL.includes(2)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    newLL.append(2);
    newLL.append(3);
    newLL.append(4);
    expect(newLL.toString()).toEqual(' 2 3 4 ');
  });
});
