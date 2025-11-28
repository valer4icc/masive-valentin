function mergeArraysById(arr1, arr2) {
  const arr2Map = new Map();
  for (const item2 of arr2) {
    arr2Map.set(item2.id, item2);
  }
  const mergedArray = arr1.map((item1) => {
    const matchingItem2 = arr2Map.get(item1.id);
    return { ...item1, ...matchingItem2 };
  });

  return mergedArray;
}
const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" },
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 },
];

const mergedResult = mergeArraysById(people, scores);
console.log(mergedResult);
