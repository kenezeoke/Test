
function isPalindrome(inputString) {
  // TODO: write your code here
  length = inputString.length;
  firstIndex = 0;
  palindromeValue = 1;
  lastIndex = length -1 ;
  while(firstIndex<lastIndex){
         if(inputString[firstIndex]===inputString[lastIndex]){
             firstIndex += 1;
             lastIndex -= 1;
        } else {
          palindromeValue = 0;
          return false;
           }
  }
  return true;

}

module.exports  = isPalindrome;
