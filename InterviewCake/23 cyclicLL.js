function cycle(head) {
  let regularNode = head;
  if (!regularNode) return false;
  let fasterNode = head.next;
  while (fasterNode && fasterNode.next) {
    regularNode = regularNode.next;
    fasterNode = fasterNode.next.next;
    if (regularNode === fasterNode) {
      return true;
    }
  }
  return false;
}