function keysAndValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return [keys, values];
}

const obj1 = { a: 1, b: 2, c: 3 };
const result1 = keysAndValues(obj1);
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(result1[0]));
console.log(JSON.stringify(result1[1]));

console.log("---");

const obj2 = { key: true };
const result2 = keysAndValues(obj2);
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(result2[0]));
console.log(JSON.stringify(result2[1]));

console.log("---");
