class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Our LL class is es6 JS
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // method will return a value that is added to the head
  insert(value){
    if (this.head === null){
      this.head = new Node(value);
    }
  }

  // method will return a boolean
  includes(value){
    let currNode = this.head;
    while(currNode){
      if(currNode.value === value){
        return true;
      } else {
        currNode = currNode.next;
      }
    }
    return false;
  }

  // method return a string representing all values in the linked lists

  toString(){
    let currentNode = this.head;
    let string = '';

    while(currentNode){
      string += `${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return string;
  }

  // Adds a new node with the given value to the end of the list
  append(value){
    if(this.head === null) {
      this.head = new Node(value);
    } else if(this.next !== null){
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    this.size++;
  }

  //Adds a new node with the given new value immediately before the first value node
  insertBefore(value, newVal){
    let node = new Node(newVal);
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode){
      if(currentNode.value === value){
        if(previousNode.value === null){
          this.head = node;
        } else {
          previousNode.next = node;
        }
        node.next = currentNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.size++;
  }

  // Adds a new node with the given newValue immediately after the first node value
  insertAfter(value, newVal){
    let node = new Node(newVal);
    let currentNode = this.head;

    if(currentNode.value === value){
      node.next = currentNode;
      this.head = node;
      return;
    }
    currentNode = currentNode.next;

    while (currentNode){
      if(currentNode.value === value){
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
  }
}



// function mergeLL(list2){
//   let current1 = this.head;
//   let current2 = list2.head;
//   let zipped = new LinkedList();

//   while(current1 || current2){
//     if(current1){
//       zipped.append(current1.value);
//       current1 = current1.next;
//     }
//     if(current2){
//       zipped.append(current2.value)
//       current2 = current2.next;
//     }
//   }
//   return zipped;
// }

module.exports = LinkedList;