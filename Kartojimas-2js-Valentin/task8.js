let s1 = parseInt(prompt("veskite pirma skaičiai"));
let s2 = parseInt(prompt("veskite antra skaičiai"));
let s3 = parseInt(prompt("veskite trečiaskaičiai"));

function simulateSleepGraph(s1, s2, s3) {
    const average = ((s1 + s2 + s3) / 3).toFixed(1);
    let status;
    if (average < 6) {
        status = "esi zombis";
    } else if (average <= 7) {
        status = "normaliai išsilaikei";
    } else {
        status = "miego karalius";
    }
    return "Vidurkis " + average + " - " + status;
}

console.log(simulateSleepGraph(s1, s2, s3))