let reverseStr = function(strArr) {
  for (let i = 0, j = strArr.length - 1; i < j; i++, j--) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
  }
  return strArr;
}