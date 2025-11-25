function longLongVowels(str) {
  return str.replace(/(aa|ee|ii|oo|uu)/gi, (match) => {
    const vowelChar = match[0];
    return vowelChar.repeat(5);
  });
}

console.log(`'Good' --> '${longLongVowels('Good')}'`);
console.log(`'Cheese' --> '${longLongVowels('Cheese')}'`);
console.log(`'Man' --> '${longLongVowels('Man')}'`);

