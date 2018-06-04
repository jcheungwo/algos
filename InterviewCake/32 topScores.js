let topScores = function(array, highestPossible) {
  let returnArray = [];
  let hash = {};
  let arrayOrder = [];
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]]) hash[array[i]]++;
    else hash[array[i]] = 1;
    if (!arrayOrder[array[i]]) arrayOrder[array[i]] = true;
  }
  for (let i = arrayOrder.length - 1; i >= 0; i--) {
    if (arrayOrder[i]) {
      for (let j = 0; j < hash[i]; j++) {
        returnArray.push(i);
      }
    }
  }
  return returnArray;
}
