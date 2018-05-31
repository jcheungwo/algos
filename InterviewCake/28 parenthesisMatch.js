function parenthesisMatch(index, string) {
  for (let i = index, count = 0; i < string.length; i++) {
    if (string[i] === '(') count++;
    if (string[i] === ')') {
      if (count) count--;
      else return i;
    }
  }
  throw 'error';
}
