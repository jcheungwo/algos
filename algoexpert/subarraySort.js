function subarraySort(array) {
  // Write your code here.
  let max = array[0];
  let min = array[array.length - 1];
  let leftSort, rightSort;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    else if (array[i] < max) rightSort = i;
  }
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] < min) min = array[i];
    else if (array[i] > min) leftSort = i;
  }
  if (rightSort) return [leftSort, rightSort]
  return [-1, -1];
}
