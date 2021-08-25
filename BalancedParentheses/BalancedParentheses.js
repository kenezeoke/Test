function areParenthesesBalanced(inputString) {

  let brackets = "()";
  let stack = [];

  if (inputString.includes("(") || inputString.includes(")") ){
    for(let bracket of inputString) {
      let indexBrackets = brackets.indexOf(bracket)

      if(indexBrackets % 2 === 0) {
        stack.push(indexBrackets + 1);

      } else {
        if(stack.pop() !== indexBrackets) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  else {
    return true;
  }
}


module.exports = areParenthesesBalanced;
