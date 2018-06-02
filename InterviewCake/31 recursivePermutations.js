function recursivePermutations(string, array = []) {
  let returnArray = [];
  if (!array.length) {
    array.push(string[0])
  }
  let newLetter = string[array[0].length];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array[i].length; j++) {
      let temp = array[i]
      returnArray.push(temp.slice(0,j) + newLetter + temp.slice(j, temp.length));
    }
  }
  if (string.length === returnArray[0].length) {
    return returnArray;
  }
  array = recursivePermutations(string, returnArray);
  return array;
}

console.log(recursivePermutations('beach'))