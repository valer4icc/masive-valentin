function sumSort(arr) {
  const sumArray = (innerArr) => innerArr.reduce((sum, num) => sum + num, 0);
  return arr.sort((a, b) => {
    const sumA = sumArray(a);
    const sumB = sumArray(b);
    return sumA - sumB;
  });
}

var arr2 = [[9, 1, 9], [2], [4, 5]];
var sortedArr2 = sumSort(arr2);
console.log(sortedArr2);
