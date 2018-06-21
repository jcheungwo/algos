function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);
  let i = 0;
  let j = 0;
  let smallestDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
  let num1, num2;
  while (i < arrayOne.length && j < arrayTwo.length) {
    let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      num1 = arrayOne[i];
      num2 = arrayTwo[j];
    }
    if (arrayOne[i] > arrayTwo[j]) {
      j++;
    } else if (diff === 0) {
      return [num1, num2];
    } else {
      i++;
    }
  }
  return [num1, num2];
}
