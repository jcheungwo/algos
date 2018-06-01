let permutationPalindrome = function(word) {
  let hash = {};
  let single = false;
  for (let i = 0; i < word.length; i++) {
    if (hash[word[i]]) hash[word[i]]++;
    else hash[word[i]] = 1;
  }
  for (let letters in hash) {
    if (hash[letters] % 2 === 1) {
      if (single) return false;
      else single = true;
    }
  }
  return true;
}
