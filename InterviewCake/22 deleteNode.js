function deleteNode(node) {
  if (!node) return;
  if (!node.next) {
    node = null;
    return;
  }
  node = node.next;
}
