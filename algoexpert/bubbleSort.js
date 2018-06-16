function bubbleSort(array) {
  for (let end = array.length; end > 1; end--) {
    for (let i = 1; i < end; i++) {
      if (array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
      }
    }
  }
  return array;
}