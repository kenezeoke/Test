
const getFizzBuzzUntil = require('./fizzbuzz');


const result = getFizzBuzzUntil(15);

test('should return an array with numbers divisible by 3 replaced by \'Fizz\' ', function() {

  expect(result[2]).toEqual('Fizz');
  expect(result[5]).toEqual('Fizz');
  expect(result[8]).toEqual('Fizz');
  expect(result[11]).toEqual('Fizz');
});

test('should return an array with numbers divisible by 5 replaced by \'Buzz\' ', function() {

  expect(result[4]).toEqual('Buzz');
  expect(result[9]).toEqual('Buzz');
});

test('should return an array with numbers divisible by 15 replaced by \'FizzBuzz\' ', function() {

  expect(result[14]).toEqual('FizzBuzz');
});
