function binarySearch(value, array) {
  // check if a number in a ascending array
  let lower = 0;
  let upper = array.length - 1;
  let mid = Math.floor((upper + lower) / 2);
  while (lower <= upper) {
    if (value === array[mid]) return true;
    if (value > array[mid]) lower = mid + 1;
    else upper = mid - 1;
    mid = Math.floor((upper + lower) / 2);
  }
  return false;
}

let array = [1 ,3, 5, 7, 9, 11];
console.log(binarySearch(11, array));
console.log(binarySearch(6, array));