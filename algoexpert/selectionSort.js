function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let mini = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        [min, mini] = [array[j], j];
      }
    }
    if (mini !== i) {
      [array[i], array[mini]] = [array[mini], array[i]];
    }
  }
  return array;
}