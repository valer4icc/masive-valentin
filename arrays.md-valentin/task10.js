function evens(numbers) {
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  return evenNumbers;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = evens(numbersArray);

console.log("Even numbers:", evenNumbersArray);
