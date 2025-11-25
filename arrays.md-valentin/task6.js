function product(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

console.log(product([2, 4, 6]));
console.log(product([-10, 10]));

