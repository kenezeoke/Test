
function Fibonnaci (n){
  const number = n;
  let n1 = 0, n2 = 1, nextTerm;
  array = []
  for (let i = 1; i <= number; i++) {
      array.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  if (array !== ""){
    return array;
  }
}

module.exports = Fibonnaci;
