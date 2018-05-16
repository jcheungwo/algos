function flightEntertainment(flightLength, movieLengths) {
  let hash = new Set;
  for (let i = 0; i < movies.length; i++) {
    if (hash.has(flightLength - movieLengths[i])) return true;
    if (hahs.has(movieLengths[i])) hash.add(movieLengths[i]);
  }
  return false;
}
