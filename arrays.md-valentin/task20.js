function isVowel(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return false;
  }

  return /^[aeiouAEIOU]$/.test(char);
}

console.log(isVowel("c"));
console.log(isVowel("e"));
console.log(isVowel("A"));
console.log(isVowel(99));
console.log(isVowel({ e: "Elephant" }));
