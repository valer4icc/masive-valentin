const Work = ["Mokytis", "Kartoti", "Testuoti"];
const Rest = ["Pietūs", "Pasivaikščiojimas", "Miegas"];
const dailyActivities = Work.concat(Rest);
function generateDailyBalance(workArr, restArr) {
  const combined = workArr.concat(restArr);
  return "Dienos balansas: " + combined.length + " veiklų.";
}

console.log(generateDailyBalance(Work, Rest));
