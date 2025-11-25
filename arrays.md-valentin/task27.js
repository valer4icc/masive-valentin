function split(str, delimiter) {
  if (delimiter === "") {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }
  const result = [];
  let currentSegment = "";
  let i = 0;
  while (i < str.length) {
    const match = str.substring(i, i + delimiter.length);
    if (match === delimiter) {
      result.push(currentSegment);
      currentSegment = "";
      i += delimiter.length;
    } else {
      currentSegment += str[i];
      i++;
    }
  }
  result.push(currentSegment);
  return result;
}

console.log("Example 1:", split("a-b-c", "-"));
console.log("Example 2:", split("APPLExxBANANAxxCHERRY", "xx"));
console.log("Example 3:", split("xyz", "r"));
