function findThreeLargestNumbers(array) {
  let num1, num2, num3;
  [num1, num2, num3] = [array[0], array[1], array[2]].sort((a,b) => b - a);
  for (let i = 3; i < array.length; i++) {
    if (array[i] > num1) {
      [num1, num2, num3] = [array[i], num1, num2];
    } else if (array[i] > num2) {
      [num2, num3] = [array[i], num2]
    } else if (array[i] > num3) {
      num3 = array[i];
    }
  }
  return [num3, num2, num1];
}