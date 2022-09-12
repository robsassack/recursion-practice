function merge(a, b) {
  let arr = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      arr.push(b[0]);
      b.shift();
    } else {
      arr.push(a[0]);
      a.shift();
    }
  }
  while (a.length > 0) {
    arr.push(a[0]);
    a.shift();
  }
  while (b.length > 0) {
    arr.push(b[0]);
    b.shift();
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let arr1 = arr.splice(0, Math.ceil(arr.length/2));
  let arr2 = arr;

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
}

console.log(mergeSort([77, 59, 54, 55, 22])); // [22, 54, 55, 59, 77]
console.log(mergeSort([66, 93, 86, 4, 14])); // [4, 14, 66, 86, 93]
console.log(mergeSort([7, 3, 85, 37, 82])); // [3, 7, 37, 82, 85]
