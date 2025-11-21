const minutesStudied = [180, 240, 300, 200, 400, 50, 60];
const restDayThreshold = 120;
const atLeastOneRestDay = minutesStudied.some(minutes => minutes < restDayThreshold);

let message;
if (atLeastOneRestDay) {
    message = "Puiku – rastas savaitgalis!";
} else {
    message = "Reikia poilsio dienos!!!";
}

console.log(message);
