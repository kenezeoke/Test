function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  function record(arr, acc){
   if (!arr.length) {
     return acc;
   }
   const curr = arr[0];
   const nextArr = arr.slice(1);
   const nextAcc = reducer(acc, curr);
   return record(nextArr, nextAcc);
   }
   if (initialValue) {
     return record(array, initialValue);
   }
   return record(array.slice(1), array[0]);
}

module.exports = Reduce;
