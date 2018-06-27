function threeNumberSum(array, targetSum) {
  let result = [];
  array.sort((a,b) => a - b);
  for (let leftMost = 0; leftMost < array.length - 2; leftMost++) {
    let left = leftMost + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[leftMost] + array[left] + array[right];
      if (sum < targetSum) {
        left++
      } else if (sum === targetSum) {
        result.push([array[leftMost], array[left], array[right]]);
        left++;
        right--;
      } else {
        right--;
      }
    }
  }
  return result;
}
