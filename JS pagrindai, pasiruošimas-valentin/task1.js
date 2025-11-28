const temperatures = [18, 25, 30, 10, 28];
const transformedTemperatures = temperatures.map((temp) => {
  let status;
  if (temp < 15) {
    status = "cold";
  } else if (temp >= 15 && temp < 25) {
    status = "warm";
  } else {
    status = "hot";
  }
  return {
    temp: temp,
    status: status,
  };
});

console.log(transformedTemperatures);
