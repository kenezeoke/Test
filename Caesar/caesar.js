function encryptCaesar(inputString, key) {
  // TODO: write your code here
  let str = inputString.toUpperCase();
  let cipher = '';
  for (let i=0; i < str.length; i++){
      cipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }

  return cipher;

}

module.exports = encryptCaesar;
