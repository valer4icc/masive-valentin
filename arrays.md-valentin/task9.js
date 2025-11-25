function mean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN;
  }

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const calculatedMean = sum / numbers.length;

  return calculatedMean;
}

console.log(mean([30, 10, 20]));
console.log(mean([-10, 10]));
