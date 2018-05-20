class Stack{
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    return this.array.pop();
  }
}

class Queue{
  constructor() {
    this.stackOne = new Stack;
    this.stackTwo = new Stack;
  }

  enqueue(value) {
    this.stackOne.enqueue(value);
  }

  dequeue() {
    if (this.stackTwo.array.length) return this.stackTwo.dequeue();
    else {
      while(this.stackOne.array.length - 1) {
        this.stackTwo.enqueue(this.stackOne.dequeue());
      }
      return this.stackOne.dequeue();
    }
  }
}

let test = new Queue;
test.enqueue(1);
console.log(test);
test.enqueue(2);
console.log(test);
test.enqueue(3);
console.log(test);
test.enqueue(4);
console.log(test);
test.enqueue(5);
console.log(test);
test.dequeue();
console.log(test);
test.enqueue(6);
console.log(test);
