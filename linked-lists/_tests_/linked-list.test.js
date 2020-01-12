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

  it('Can properly append into the linked list', () => {
    newLL.append(1);
    newLL.append(2);
    newLL.append(3);
    expect(newLL.head.next.next.value).toEqual(3);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    newLL.append(1);
    newLL.append(2);
    expect(newLL.head.value).toEqual(1);
    expect(newLL.head.next.value).toEqual(2);
  });

  it('Can properly append multiple nodes into the linked list', () => {
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
    expect(newLL.toString()).toEqual('234');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    newLL.append(1);
    expect(newLL.size).toEqual(1);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    newLL.append(1);
    newLL.append(2);
    newLL.append(3);
    expect(newLL.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    newLL.append(9);
    newLL.append(11);
    newLL.insertBefore(11,10);
    expect(newLL.head.next.value).toEqual(10);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    newLL.append(3);
    newLL.append(4);
    newLL.insertBefore(3,5);
    expect(newLL.head.value).toEqual(5);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    newLL.append(4);
    newLL.append(5);
    newLL.append(7);
    newLL.insertAfter(5,6);
    expect(newLL.head.next.next.value).toEqual(6);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    newLL.append(3);
    newLL.append(3);
    newLL.append(5);
    newLL.insertAfter(5,7);
    expect(newLL.head.next.next.next.value).toEqual(7);
  });

  it('Where k is greater than the length of the linked list', () => {
    newLL.append(69);
    newLL.append(23);
    newLL.append(2);
    newLL.append(12);
    expect(newLL.kthFromTheEnd(3).value).toEqual(69);
  });

  it('Where k and the length of the list are the same', () => {
    newLL.append(2);
    newLL.append(2);
    newLL.append(4);
    expect(newLL.kthFromTheEnd(2).value).toEqual(2);
  });

  it('Where k is not a positive integer', () => {
    newLL.append(2);
    newLL.append(3);
    newLL.append(4);
    expect(newLL.kthFromTheEnd(1).value).toEqual(3);
  });

  it('Where the linked list is of a size 1', () => {
    newLL.append(0);
    newLL.append(1);
    expect(newLL.kthFromTheEnd(0).value).toBe(1);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    newLL.append(1);
    newLL.append(2);
    newLL.append(3);
    newLL.append(4);
    newLL.append(5);
    newLL.append(6);
    newLL.append(7);
    newLL.append(8);
    newLL.append(9);
    expect(newLL.kthFromTheEnd(4).value).toBe(5);
  });
});
