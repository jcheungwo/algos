let bracketValidation = function(string) {
  //otherwise add the current char into stack
  //return length of stack
  //create a stack
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    //if last element in the stack matches, pop it off
    let last = stack[stack.length - 1]
    if (string[i] === '}' && last === '{') stack.pop();
    else if (string[i] === ')' && last === '(') stack.pop();
    else if (string[i] === ']' && last === '[') stack.pop();
    else stack.push(string[i]);
  }
  return stack.length ? false : true;
}

console.log(bracketValidation('({{[)'));
