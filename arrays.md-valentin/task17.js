function countValue(arr, value) {
  return arr.reduce((accumulator, currentValue) => {
    return currentValue === value ? accumulator + 1 : accumulator;
  }, 0);
}

console.log(countValue([1, 2, 3, 4, 5], 2));
console.log(countValue([1, 2, 3, 4, 5], 17));
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countValue(["hello", "bananas", "hello"], "hello"));
console.log(countValue(["hello", "bananas", "hello"], "giraffe"));
