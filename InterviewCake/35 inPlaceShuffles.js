function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}
function inPlaceShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //find a random element within the array
    let randomEl = random(i + 1);
    // place it at the last element
    if (randomEl !== i) {
      [array[i], array[randomEl]] = [array[randomEl], array[i]];
    }
  }
  return array;
}

console.log(inPlaceShuffle([1, 2, 3, 4, 5, 6]));