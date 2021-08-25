const areParenthesesBalanced = require('./BalancedParentheses');


test('should return FALSE if there are more opening parentheses', function() {

  const input = '((((((())';

  expect(areParenthesesBalanced(input)).toBeFalsy();
});

test('should return FALSE if there are more closing parentheses', function() {

  const input = '()))';

  expect(areParenthesesBalanced(input)).toBeFalsy();
});

test('should return FALSE if the numbers are equal, but the order is wrong', function() {

  const input = '())(()';

  expect(areParenthesesBalanced(input)).toBeFalsy();
});

test('should return TRUE if the parentheses are correct', function() {

  const input = '(()((())()))';

  expect(areParenthesesBalanced(input)).toBeTruthy();
});

test('should return TRUE if the input contains 0 parentheses', function() {

  const input = 'there are no parentheses';

  expect(areParenthesesBalanced(input)).toBeTruthy();
});
