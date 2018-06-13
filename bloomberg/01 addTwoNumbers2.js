var addTwoNumbers = function(l1, l2) {
  let length1 = 0;
  let length2 = 0;
  let returnNode;
  for (let current = l1; current; current = current.next) {
    length1++;
  }
  for (let current = l2; current; current = current.next) {
    length2++;
  }
  if (length1 < length2) {
    [l1, l2, length1, length2] = [l2, l1, length2, length1];
  }
  returnNode = createNodes(l1, l2, length1, length2);
  if (returnNode.val > 9) {
    let temp = new ListNode(1);
    returnNode.val -= 10;
    temp.next = returnNode;
    returnNode = temp;
  }
  return returnNode;
};

var createNodes = function(l1, l2, length1, length2) {
  let returnNode;
  if (length1 === 0 && length2 === 0) {
    return null;
  }
  if (length1 !== length2) {
    returnNode = new ListNode(l1.val);
    returnNode.next = createNodes(l1.next, l2, length1 - 1, length2);
  } else {
    returnNode = new ListNode(l1.val + l2.val);
    returnNode.next = createNodes(l1.next, l2.next, length1 - 1, length2 - 1);
  }
  if (returnNode.next && returnNode.next.val > 9)  {
    returnNode.next.val -= 10;
    returnNode.val++;
  }
  return returnNode;
}