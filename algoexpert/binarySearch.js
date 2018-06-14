function binarySearch(array, target) {
  let lower = 0;
  let upper = array.length - 1;
  let mid;
  while (lower <= upper) {
    mid = Math.floor((lower + upper) / 2);
    if (array[mid] > target) {
      upper = mid - 1;
    } else if (array[mid] === target) {
      return mid;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
}