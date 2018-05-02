let flatten = function(root) {
  // return if root does not exist
  if (!root) return;
  // swap left and right
  [root.left, root.right] = [root.right, root.left];
  // call function on right
  flatten(root.right);
  // call function on left
  flatten(root.left);
  // go to next available right and place left in it
  if (root.left) {
    let currentNode = root;
    while (currentNode.right) currentNode = currentNode.right;
    currentNode.right = root.left;
    root.left = null;
  }
};
