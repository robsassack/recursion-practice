function fibs(n) {
  let output = [];
  let index = 0;
  while (index < n) {
    if (index === 0) {
      output.push(0);
    } else if (index === 1) {
      output.push(1);
    } else {
      output.push(output[index-1] + output[index-2])
    }
    index++;
  }
  return output;
}

console.log(fibs(20));

function fibsRec(n) {
  if (n === 0) {
    return [ 0 ];
  } else if (n === 1) {
    return [0, 1];
  }
  const output = fibsRec(n-1);
  return [...output, output[n-1] + output[n-2]];
}

console.log(fibsRec(20));