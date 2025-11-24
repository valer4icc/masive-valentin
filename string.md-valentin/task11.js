function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return "";

      return match.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function camelizeAlt(str) {
  const words = str.match(/[A-Za-z]+/g);

  if (!words || words.length === 0) {
    return "";
  }

  return words
    .map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

