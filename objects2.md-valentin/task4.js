function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty({}));       
console.log(isObjectEmpty({ a: 1 }));    
console.log(isObjectEmpty({ b: 2 }));    
