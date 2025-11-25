function sumNumbers(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}


const numbersArrayReduce = [1, 4, 8];
console.log(sumNumbers(numbersArrayReduce));
