function recognizeEmployees(names, employeesOfTheMonth) {
  const employeeOfTheMonthSet = new Set(employeesOfTheMonth);

  const recognitionMessages = names.map((name) => {
    if (employeeOfTheMonthSet.has(name)) {
      return `Outstanding job, ${name}!`;
    } else {
      return `Great job, ${name}!`;
    }
  });

  return recognitionMessages;
}

console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill"]));

console.log(
  recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill", "Susan"]));

console.log(
  recognizeEmployees(["Susan", "Anthony", "Bill"], ["Jennifer", "Dylan"]));
