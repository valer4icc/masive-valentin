let myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log("The 3rd item is:", myArray[2]);

myArray[4] = null;
console.log("'thursday' to null:", myArray);
const positionOfThursday = myArray.indexOf(null);
console.log(
  "The position where 'thursday'",
  positionOfThursday
);
