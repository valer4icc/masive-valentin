const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const abbreviatedDays = daysOfWeek.map((day) => day.substring(0, 3));

console.log(abbreviatedDays);
