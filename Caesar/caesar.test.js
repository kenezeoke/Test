const  encryptCaesar = require('./caesar');

const input = 'GAMEOFTHRONES';

test('should encrypt \'GAMEOFTHRONES\' to HBNFPGUISPOFT with key 1', function () {

  expect(encryptCaesar('GAMEOFTHRONES', 1)).toEqual('HBNFPGUISPOFT');
});

test('should encrypt \'GAMEOFTHRONES\' to JDPHRIWKURQHV with key 3', function () {

  expect(encryptCaesar('GAMEOFTHRONES', 3)).toEqual('JDPHRIWKURQHV');
});

test('should rotate/wrap around letters', function () {

  expect(encryptCaesar('XYZ', 4)).toEqual('BCD');
});
