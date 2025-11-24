function uncamelize(str, separator = " ") {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .toLowerCase();
}

console.log(uncamelize("helloWorld")); 
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
