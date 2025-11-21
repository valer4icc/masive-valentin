function counttingusDays(days) {
  let tingusCount = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] === 'tingus') {
      tingusCount++;
    }
  }

  return `Tinginystė užklupo ${tingusCount} kartus.`;
}

const entries = [
  'motyvuotas', 'tingus', 'tingus', 'normalus', 'motyvuotas', 'tingus', 'ramus'];
console.log(counttingusDays(entries));



