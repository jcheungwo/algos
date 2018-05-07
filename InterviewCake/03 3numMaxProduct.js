function highestProductOf3(array) {
  // O(n) Time, O(1) space

  //store 3 largest numbers, 2 smallest numbers
  let largest1 = array[0], smallest1 = array[0];
  let largest2, largest3, smallest2;
  if (array.length < 3) throw 'error';
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= largest1) {
      [largest3, largest2, largest1] = [largest2, largest1, array[i]];
    }
    else if (!largest2) {
      largest2 = array[i];
    }
    else if (array[i] >= largest2) {
      [largest3, largest2] = [largest2, array[i]];
    }
    else if (!largest3) largest3 = array[i];
    else if (array[i] > largest3) {
      largest3 = array[i];
    }
    else if (!largest3) {
      largest3 = array[i];
    }
    if (array[i] < smallest1) {
      [smallest2, smallest1] = [smallest1, array[i]];
    }
    else if (!smallest2) smallest2 = array[i];
    else if (array[i] < smallest2) {
      smallest2 = array[i];
    }
  }
  //if the largest number is negative return product of largest 3
  if (largest1 < 0) return largest1 * largest2 * largest3;
  //if 2 smallest numbers are negative check with the 2nd and 3rd largest return the greater with largest
  if (smallest1 < 0 && smallest2 < 0) {
    if (smallest1 * smallest2 > largest2 * largest3) return smallest1 * smallest2 * largest1;
  }
  //otherwise return 3 greatest numbers
  return largest1 * largest2 * largest3;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(emptyArray, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}