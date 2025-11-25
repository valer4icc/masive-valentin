function integers(numbers) {
  return numbers.filter((number) => Number.isInteger(number));
}

const mixedNumbers = [3.14, 2.4, 7, 8.1, 2];
const integersOnly = integers(mixedNumbers);

console.log(integersOnly);
