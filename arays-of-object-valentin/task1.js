function coolCities(citiesArray) {
  const coolCitiesArray = citiesArray.filter(function (city) {
    return city.temperature < 70;
  });
  return coolCitiesArray;
}

var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
  { name: "Miami", temperature: 75.0 },
  { name: "Seattle", temperature: 65.0 },
];

var coolerCities = coolCities(cities);
console.log(coolerCities);
