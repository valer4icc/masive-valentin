const topics = ["Kintamieji","Ciklai","Masyvai","Funkcijos","Objektai"];
const numberedList = topics.map((topic, index) => {
  return index + 1 + ". " + topic;
});

console.log(numberedList);
