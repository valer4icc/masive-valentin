function calculateMaxScrabbleScore(tiles) {
  let totalScore = 0;
  for (let i = 0; i < tiles.length; i++) {
    totalScore += tiles[i].score;
  }
  return totalScore;
}

const myTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const maxScore = calculateMaxScrabbleScore(myTiles);
console.log(maxScore);
