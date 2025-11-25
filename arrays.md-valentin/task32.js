function strLengthSort(arr) {
  return [...arr].sort((a, b) => a.length - b.length);
}
const fruits = ['Apple', 'Bananaaa', 'Cherry'];
console.log(strLengthSort(fruits));
