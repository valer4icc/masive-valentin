function skaiciuokPertraukas(hours) {
  const totalMinutes = hours * 60;
  const studyMinutes = 45;
  let breaks = 0;
  let timeSpent = 0;

  while (timeSpent + studyMinutes <= totalMinutes) {
    timeSpent += studyMinutes;
    breaks++;
  }

  return breaks;
}

console.log(skaiciuokPertraukas(3));

