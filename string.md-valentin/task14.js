function insert(mainString, subString = "", position = 1) {
  const index = position - 1;
  const safeIndex = Math.max(0, Math.min(index, mainString.length));
  const firstPart = mainString.slice(0, safeIndex);
  const secondPart = mainString.slice(safeIndex);

  return firstPart + subString + secondPart;
}

console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
