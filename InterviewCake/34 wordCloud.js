function wordCloud(string) {
  let words = string.split(' ')
  let map = new Map;
  for (let i = 0; i < words.length; i++) {
    let cleanedWord = cleanWord(words[i])
    if (!map[cleanedWord]) map[cleanedWord] = 1;
    else map[cleanedWord]++;
  }
  return map
}

function cleanWord(word) {
  let returnWord = '';
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= 'a' && word[i] <= 'z') returnWord += word[i];
  }
  return returnWord;
}

console.log(wordCloud('today is a good day to die today'))