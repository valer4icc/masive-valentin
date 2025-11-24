function is_Blank(inputString) {
  if (typeof inputString !== "string") {
    return false;
  }

  const charArray = Array.from(inputString.trim());

  return charArray.length === 0;
}


console.log(is_Blank('')); 
console.log(is_Blank('abc')); 

