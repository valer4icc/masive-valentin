function countLessThan(numbers, threshold) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < threshold) {
      count++;
    }
  }

  return count;
}

console.log(countLessThan([1, 2, 3, 4, 5], 1));
console.log(countLessThan([1, 2, 3, 4, 5], 17));
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10));
