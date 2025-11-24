function is_string(input) {
  return Object.prototype.toString.call(input) === "[object String]";
}

console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));
