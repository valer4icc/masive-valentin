function capitalizeAll(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
}

console.log(capitalizeAll('hello world'));
console.log(capitalizeAll('every day is like sunday'));
