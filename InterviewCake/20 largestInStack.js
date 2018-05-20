function Stack() {
  // initialize an empty array
  this.items = [];
  this.max = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
  if (this.max[item]) this.max[item]++;
  else this.max[item] = 1;
};

// remove the last item
Stack.prototype.pop = function() {

  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }
  let lastItemIdx = this.items.length - 1
  this.max[this.items[lastItemIdx]]--;
  if (this.max[this.items[lastItemIdx]] === 0) this.max[this.items[lastItemIdx]] = undefined;
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

Stack.prototype.getMax = function() {
  return this.max[this.max.length - 1];
}