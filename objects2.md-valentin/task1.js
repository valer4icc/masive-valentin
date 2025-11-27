function isNumberInRange(number, range) {
  return number >= range.min && number <= range.max;
}

console.log(isNumberInRange(4, { min: 0, max: 5 }));
console.log(isNumberInRange(4, { min: 4, max: 5 }));   
console.log(isNumberInRange(4, { min: 6, max: 10 }));   
console.log(isNumberInRange(5, { min: 5, max: 5 }));     
