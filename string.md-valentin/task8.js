const capitalize = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1);
  return firstChar + restOfString;
};

console.log(capitalize("js string exercises"));
