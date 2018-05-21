function findUnique(array) {
  let unique = 0;
  array.map((id) => {
    unique ^= id;
  });
  return unique;
}
