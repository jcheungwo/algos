function getNthFib(n) {
  let num1 = 0;
  let num2 = 1;
  if (n < 2) {
    return 0;
  }
  for (let i = 2; i < n; i++) {
    [num1, num2] = [num2, num1 + num2];
  }
  return num2;
}