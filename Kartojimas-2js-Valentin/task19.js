function calculateWorkRestBalance(workHours, restHours) {
  if (
    typeof workHours !== "number" ||
    typeof restHours !== "number" ||
    workHours < 0 ||
    restHours < 0
  ) {
    return "Neteisinga įvestis. Pateikite neneigiamus darbo ir poilsio valandų skaičius..";
  }

  if (workHours === 0) {
    return "Negalima apskaičiuoti santykio, kai darbo valandų skaičius yra nulis.";
  }

  const ratio = restHours / workHours;

  if (ratio === 1) {
    return `Santykis: ${ratio.toFixed(2)} → Idealus balansas`;
  } else if (ratio >= 0.5 && ratio < 1) {
    return `Santykis: ${ratio.toFixed(2)} → Geras balansas`;
  } else if (ratio < 0.5) {
    return `Santykis: ${ratio.toFixed(2)} → Reikia atostogų`;
  } else {
    return `Santykis: ${ratio.toFixed(
      2
    )} → Idealus balansas (daugiau poilsio nei darbo!)`;
  }
}

console.log(calculateWorkRestBalance(10, 8));
