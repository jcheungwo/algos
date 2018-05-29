function reverseWords(message) {
  //reverse whole array
  for (let i = 0, j = message.length - 1; i < j; i++, j--) {
    [message[i], message[j]] = [message[j], message[i]];
  }
  //reverse each individual word delimited by a space
  for (let i = 0, lastStart = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      for (let j = i - 1, lastStart < j; lastStart++, j--) {
        [message[lastStart], message[j]] = [message[j], message[lastStart]];
      }
      lastStart = i + 1;
    }
  }
}
