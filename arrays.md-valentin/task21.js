function removeAnyWordWithZ(words) {
  const wordsWithoutZ = words.filter((word) => {
    const containsZ = /[zZ]/.test(word);

    return !containsZ;
  });

  return wordsWithoutZ;
}

const inputWords = [
  "apple",
  "banana",
  "zebra",
  "kiwi",
  "pizza",
  "azure",
  "Zucchini",
];
const filteredWords = removeAnyWordWithZ(inputWords);

console.log("Original words:", inputWords);
console.log("Words without 'z'/'Z':", filteredWords);
