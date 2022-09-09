function sumSquares(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i=0; i<array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumSquares(array[i]);
    } else {
      sum += array[i] * array[i];
    }
  }
  return sum;
}

var l = [1,2,3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]];
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400