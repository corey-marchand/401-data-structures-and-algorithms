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
  }
}
// traversing a linked list
//   traverse() {
//     let current = this.head;

//     while(current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }

function mergeLL(list2){
  let current1 = this.head;
  let current2 = list2.head;
  let zipped = new LinkedList();

  while(current1 || current2){
    if(current1){
      zipped.append(current1.value);
      current1 = current1.next;
    }
    if(current2){
      zipped.append(current2.value)
      current2 = current2.next;
    }
  }
  return zipped;
}

