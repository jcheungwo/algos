let reverseLL = function(head) {
  let previous = head;
  if (!head) return null;
  let current = head.next;
  if (current) {
    let next = current.next;
  }
  while (current) {
    if (previous === head) prevoius.next = null;
    current.next = previous;
    previous = current;
    current = next;
    next = current.next;
  }
  return previous;
}

//Bonus
//Write a function to reverse out of place

let reverseLLOoP = function(head) {
  let current = head;
  let newestNode = new Node(current.val)
  if (!head) return null;
  current = head.next;
  while (current) {
    let temp = new Node(current.val);
    temp.next = newestNode;
    newestNode = temp;
    current = current.next;
  }
  return newestNode;
}
