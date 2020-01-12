
class BinaryTree {
  constructor(root = null){
    this.root = root === null ? null : new Node(root);
  }
  preOrder(){
    let answer = [];
    let traverse = (node) => {
      answer.push(node.value);
      if(node.left){
        traverse(node.left);
      } if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return answer;
  }
  inOrder(){
    let answer = [];
    let traverse =  (node) => {
      if(node.left){
        traverse(node.left);
      }
      answer.push(node.value);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return answer;
  }

  postOrder(){
    let answer = [];
    let traverse = (node) => {
      if(node.left){
        traverse(node.left);
      } if(node.right){
        traverse(node.right);
      }
      answer.push(node.value);
    };
    traverse(this.root);
    return answer;
  }
}
class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = right;
    this.right = left;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value){
    if(this.root === null){
      this.root = new Node(value);
      return;
    }
    this.addHelper(value, this.root);
  }

  addHelper(value, parentNode){
    if(value > parentNode.value){
      if(parentNode.right === null){
        parentNode.right = new Node(value);
        return;
      } else {
        this.addHelper(value, parentNode.right);
        return;
      }
    }
    if(value < parentNode.value){
      if(parentNode.left === null){
        parentNode.left = new Node(value);
        return;
      } else {
        this.addHelper(value, parentNode.left);
        return;
      }
    }
  }

  contains(value){
    return this.containsHelper(value, this.root);
  }

  containsHelper(value, parentNode){
    if(parentNode === null){
      return false;
    }
    if(parentNode === value){
      return true;
    }
    else if(parentNode < value){
      return this.containsHelper(value, parentNode.right);
    }
    else if(parentNode.value >= value){
      return this.containsHelper(value, parentNode.left);
    }
  }
}

module.exports = { BinaryTree, BinarySearchTree, Node };