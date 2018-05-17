function fib(num) {
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= num; i += 2) {
    num1 += num2;
    num2 += num1;
  }
  return num % 2 === 0 ? num1 : num2;
}

console.log('Input: 0, expect ',fib(0), ' to equal 0, ', fib(0) === 0)
console.log('Input: 1, expect ',fib(1), ' to equal 1, ', fib(1) === 1)
console.log('Input: 15, expect ',fib(15), ' to equal 610, ', fib(15) === 610)
console.log('Input: 23, expect ',fib(23), ' to equal 28657, ', fib(23) === 28657)
console.log('Input: 47, expect ',fib(47), ' to equal 2971215073, ', fib(47) === 2971215073)
