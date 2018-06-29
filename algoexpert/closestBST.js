function findClosestValueInBst(tree, target) {
  let queue = [tree];
  let currentNode, closestValue, value;
  if 
  while(queue.length) {
    currentNode = queue.shift();
    value = currentNode.value;
    if (!closestValue) {
      closestValue = value;
    } else if (Math.max(target, value) - Math.min(target, value) < Math.max(closestValue, target) - Math.min(closestValue, target)) {
      closestValue = value;
    }
    if (Math.max(target, closestValue) - Math.min(target, closestValue) === 0) {
      return closestValue;
    }
    if (currentNode.right) queue.push(currentNode.right)
    if (currentNode.left) queue.push(currentNode.left)
  }
  return closestValue;
}