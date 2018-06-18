function caesarCipherEncryptor(string, key) {
  let returnString = '';
  for (let i = 0; i < string.length; i++) {
    let newAscii = (string.charCodeAt(i) + (key % 26));
    if (newAscii > 122) {
      newAscii -= 26
    }
    returnString += String.fromCharCode(newAscii);
  }
  return returnString;
}