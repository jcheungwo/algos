function riffleShuffle(shuffled, half1, half2) {
  let end = shuffled.length - 1;
  let end1, end2, first, second;
  if (shuffled[end] === half1[half1.length - 1]) {
    first = half1;
    second = half2;
  } else if (shuffled[end] === half2[half2.length - 1]) {
    first = half2;
    second = half1;
  } else {
    return false;
  }
  end1 = first.length - 1;
  end2 = second.length - 1;
  while (end >= 0) {
    if (end1 >= 0) {
      if (first[end1] === shuffled[end]) {
        end1--;
        end--;
      } else {
        return false;
      }
    }
    if (end2 >= 0) {
      if (second[end2] === shuffled[end]) {
        end2--;
        end--;
      } else {
        return false;
      }
    }
  }
  return true;
}
