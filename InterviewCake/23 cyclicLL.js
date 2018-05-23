function cycle(head) {
  let regularNode = head;
  if (!regularNode) return false;
  let fasterNode = head.next;
  while (regularNode !== fasterNode) {
    if (!fasterNode) return false;
    fasterNode = fasterNode.next;
    if (!fasterNode) return false;
    fasterNode = fasterNode.next;
    regularNode = regularNode.next;
  }
  return true;
}