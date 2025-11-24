const capitalizeWords = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  return capitalizedWords.join(" ");
};

console.log(capitalizeWords("js string exercises"));
