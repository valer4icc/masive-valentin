
function removeWordsWithChar(words, charToRemove) {

  if (typeof charToRemove !== 'string' || charToRemove.length !== 1) {
    console.error("Error: Second argument must be a single character string.");
    return words; 
  }


  const escapedChar = charToRemove.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');


  const regex = new RegExp(escapedChar, 'i');


  const wordsWithoutChar = words.filter(word => {

    const containsChar = regex.test(word);

    
    return !containsChar;
  });

  return wordsWithoutChar;
}


const list1 = ['aaa', 'bbb', 'ccc'];
const char1 = 'b';
console.log(`Removing '${char1}' from [${list1.join(', ')}] -->`, removeWordsWithChar(list1, char1));



const list2 = ['pizza', 'beer', 'cheese'];
const char2 = 'E';
console.log(`Removing '${char2}' from [${list2.join(', ')}] -->`, removeWordsWithChar(list2, char2));


