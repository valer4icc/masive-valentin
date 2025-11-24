const text_truncate = (str, length, ending = '…') => {
  if (length === undefined) {
    return str;
  }

  if (str.length > length) {
    return str.substring(0, length) + ending;
  } else {
    return str;
  }
};

console.log("Example 1:", text_truncate('We are doing JS string exercises.'));
console.log("Example 2:", text_truncate('We are doing JS string exercises.', 19));
console.log("Example 3:", text_truncate('We are doing JS string exercises.', 15, '!!'));



