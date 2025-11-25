function leetspeak(text) {
  const substitutions = new Map([
    ["A", "4"],
    ["E", "3"],
    ["G", "6"],
    ["I", "1"],
    ["O", "0"],
    ["S", "5"],
    ["T", "7"],
  ]);
  let result = "";
  for (const char of text) {
    const upperChar = char.toUpperCase();
    if (substitutions.has(upperChar)) {
      result += substitutions.get(upperChar);
    } else {
      result += char;
    }
  }

  return result;
}


console.log(`Leet -"${leetspeak("Leet")}"`); 
console.log(`ORANGE -"${leetspeak("ORANGE")}"`); 

