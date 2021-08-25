
const Reduce = require('./reduce');

test('should work with numbers.', function() {

  const array = [1, 2, 3, 4, 5];
  const reducer = (acc, curr) => acc += curr;

  expect(Reduce(array, reducer, 0)).toEqual(15);
});

test('should work with strings', function() {

  const array = ['this ', 'is ', 'a ', 'string'];
  const reducer = (acc, curr) => acc.concat(curr);

  expect(Reduce(array, reducer, '')).toEqual('this is a string');
});
