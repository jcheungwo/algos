function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) return;
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  [tree.left, tree.right] = [tree.right, tree.left];
}
