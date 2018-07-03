function twoNumberSum(array, targetSum) {
  // O(n) time and space
  let hashSet = new Set;
  for(let i = 0; i < array.length; i++) {
    if (hashSet.has(targetSum - array[i])) {
      return [Math.min(array[i], targetSum - array[i]), Math.max(array[i], targetSum - array[i])];
    }
    else {
      hashSet.add(array[i]);
    }
  }
  return [];
}
