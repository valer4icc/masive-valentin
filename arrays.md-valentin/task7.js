function anyPositive(arr) {
  for (const element of arr) {
    if (typeof element === "number" && element > 0) {
      return true;
    }
  }
  return false;
}

function anyPositiveShort(arr) {
  return arr.some((element) => typeof element === "number" && element > 0);
}

console.log(anyPositive([1, 2, 3, 4, 5]));
console.log(anyPositive([1, 2, -3,, 4, 5]));
console.log(anyPositive([0, 0, 1]));
console.log(anyPositive([-10, -10,, -10]));
console.log(anyPositive([-10, -10,, 1]));
