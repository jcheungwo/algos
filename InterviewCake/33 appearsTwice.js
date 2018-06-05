let appearsTwice = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return sum % array.length;
}

// Bonus 
// If our array contains huge numbers or is really long,
// our sum might be so big it causes an integer overflow.
// What are some ways to protect against this?

// multiply every number's index by -1 to show that they appear
// if the index is already negative, return that number
// O(n) time, O(1) space