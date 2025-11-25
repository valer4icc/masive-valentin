function odds(numbers) {
  const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
  });

  return oddNumbers;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = odds(numbersArray);

console.log("Odd numbers:", oddNumbersArray);
