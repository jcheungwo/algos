// Permutations

// Write a function that takes in an array of unique integers and returns an array of all permutations of those integers. If the input array is empty, your function should return an empty array.

// Sample input: [1, 2, 3]
// Sample output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

function permutations(arr) {
  let returnArr = [];
  for (let i = 0, temp = 0; i < arr.length; i++) {
    for (let j = 0, instance = [arr[i]]; j < arr.length; j++, instance = [arr[i]]) {
      if (j === i) continue;
      for (let k = j, flag = true; flag || k !== j; k++) {
        if (k === i) {
          if (!arr[k + 1]) k = -1;
          continue;
        }
        if (k === j) flag = false;
        instance.push(arr[k]);
        if (!arr[k + 1]) k = -1;
      }
      returnArr.push(instance);
    }
  }
  return returnArr;
}

console.log(permutations([1, 2, 3, 4]))
