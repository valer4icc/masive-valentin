function cityNames(citiesArray) {
  const names = citiesArray.map(function (city) {
    return city.name;
  });
  return names;
}

var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

var namesOfCities = cityNames(cities);
console.log(namesOfCities);
