function selectRestDay(days) {
  const restDays = days
    .filter((dayStr) => {
      const match = dayStr.match(/\d+/);
      if (match) {
        const hours = parseInt(match[0], 10);
        return hours < 3;
      }
      return false;
    })
    .map((filteredDayStr) => {
      return `${filteredDayStr} – pagaliau pailsėjai bent truputį!`;
    });

  return restDays;
}

const learningSchedule = [
  "Pirmadeni: 5v. mokymosi",
  "Antradienis: 2v. mokymosi",
  "Trečadenis: 8v. mokymosi",
  "Ketvirtadeni: 2v. mokymosi",
  "Penktadeni: 4v. mokymosi",
];

const daysWithRest = selectRestDay(learningSchedule);
console.log(daysWithRest);
