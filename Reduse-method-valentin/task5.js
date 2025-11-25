function flatten(arr) {
  return arr.reduce(function (flatArray, currentSubArray) {
    return flatArray.concat(currentSubArray);
  }, []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));
