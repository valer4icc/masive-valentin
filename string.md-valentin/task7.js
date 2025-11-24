const stringParameterize = (str) => {
  let parameterizedStr = str.toLowerCase();
  parameterizedStr = parameterizedStr.replace(/[^a-z-]/g, " ");
  parameterizedStr = parameterizedStr.replace(/[ -]+/g, "-");
  return parameterizedStr;
};

console.log(stringParameterize("ROBIN Singh from USA. AAAAAAAAAAAAAAA"));
