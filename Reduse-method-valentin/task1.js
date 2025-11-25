function total(arr) {
  const sum = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0); 
  return sum;
}

console.log(total([1, 2, 3]));
      
