class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    let currentNode = this;
    
    while(true) {
      if (value >= currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) {
      return true;
    }
    let left = false;
    let right = false;
    if (this.left) left = this.left.contains(value);
    if (this.right) right = this.right.contains(value);
    return left || right;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}