const Work = ["Mokytis JS", "Ateiti į pamokas", "Kartotis"];
const Rest = ["Miegas", "Serialai", "Maistas"];

function processArrays(workArr, restArr) {
  const combinedArray = workArr.concat(restArr);
  const startIndex = workArr.length;
  for (let i = startIndex; i < combinedArray.length; i++) {
    combinedArray[i] = combinedArray[i].toUpperCase();
  }
  return combinedArray;
}
function processArraysModern(workArr, restArr) {
  const upperCaseRest = restArr.map((item) => item.toUpperCase());
  return workArr.concat(upperCaseRest);
}
const result = processArrays(Work, Rest);
console.log(result);
