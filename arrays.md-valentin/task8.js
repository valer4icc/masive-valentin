function positives(arr) {
  const positiveNumbers = arr.filter((element) => {
    const num = Number(element);

    return num > 0;
  });

  return positiveNumbers;
}

console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-1, -2, -3]));
