function mostFrequentChar(str) {
  const charCounts = {};
  const normalizedStr = str.toLowerCase().replace(/\s/g, "");
  let maxCount = 0;
  let mostFrequent = "";
  for (let i = 0; i < normalizedStr.length; i++) {
    const char = normalizedStr[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
    if (charCounts[char] > maxCount) {
      maxCount = charCounts[char];
      mostFrequent = char;
    }
  }
  return mostFrequent;
}

const exampleString1 = "Hello world";
console.log(`String: "${exampleString1}"`);
console.log(`Most frequent character: "${mostFrequentChar(exampleString1)}"`);

const exampleString2 = "Programming is Fun";
console.log(`String: "${exampleString2}"`);
console.log(`Most frequent character: "${mostFrequentChar(exampleString2)}"`);

const exampleString3 = "aabbbc";
console.log(`String: "${exampleString3}"`);
console.log(`Most frequent character: "${mostFrequentChar(exampleString3)}"`);
