function nicer(sentence) {
  const forbiddenWords = ["heck", "darn", "dang", "crappy"];
  const regexPattern = new RegExp(
    `\\b(?:${forbiddenWords.join("|")})(?:\\s|\\b)*`,
    "gi"
  );

  let cleanedSentence = sentence.replace(regexPattern, " ");
  cleanedSentence = cleanedSentence.trim().replace(/\s+/g, " ");
  return cleanedSentence;
}

const input1 = "mom get the heck in here and bring me a darn sandwich.";
console.log(`${input1} > ${nicer(input1)}`);
