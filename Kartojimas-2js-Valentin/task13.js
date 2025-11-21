function calculate(minutesPerDay) {
  const totalMinutes = minutesPerDay.reduce((a, currentValue) => {
    return a + currentValue;
  }, 0);

  if (totalMinutes > 100) {
    return `Uff... atidėliojimo per daug: ${totalMinutes} min`;
  } else {
    return `Kitaip: ${totalMinutes} min`;
  }
}

const excessiveProcrastination = [20, 30, 60];
const messageExceeds = calculate(excessiveProcrastination);
console.log(messageExceeds);


