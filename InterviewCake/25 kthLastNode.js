let kthLastNode = function(k, head) {
  let currentNode = head;
  let length = 0;
  while (currentNode) {
    length++;
    currentNode = head.next;
  }
  if (length - k < 0) return null;
  currentNode = head;
  for (let i = 0; i < length - k; i++, currentNode = head.next) {}
  return currentNode;
}
