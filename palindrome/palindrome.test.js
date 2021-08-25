const isPalindrome = require('./palindrome');


test('should return FALSE if given input is not a palindrome', function () {

  const inputString = 'ewqrfg';

  expect(isPalindrome(inputString)).toBeFalsy();
});

test('should return TRUE if given input is a palindrome', function () {

  const inputString = 'racecar';

  expect(isPalindrome(inputString)).toBeTruthy();
});
