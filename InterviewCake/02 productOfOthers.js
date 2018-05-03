let productOfOthers = function(array) {
  // O(n) Time, O(n) Space
  let returnArray = [1]
  // Multiply by previous number in array from beginning to end
  for (let i = 1; i < array.length; i++) {
    returnArray[i] = array[i - 1] * returnArray[i - 1];
  }
  // Multiply by previous number in array from end to beginning
  for (let i = returnArray.length - 2, product = array[array.length - 1]; i >= 0; product *= array[i], i--) {
    returnArray[i] *= product;
  }
  return returnArray;
}
