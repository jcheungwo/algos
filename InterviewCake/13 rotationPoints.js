let rotationPoint = function(words) {
  let lower = 0;
  let upper = words.length - 1;
  let mid = Math.floor(words.length / 2);
  if (words.length < 1) return 0;
  while (lower < upper - 1) {
    if (words[mid] < words[mid - 1]) return mid;
    if (words[mid] >= words[upper]) upper = mid;
    else lower = mid;
    mid = Math.floor((upper + lower) / 2);
  }
  if (lower > upper) return upper;
  return 0;
}

let words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(rotationPoint(words));