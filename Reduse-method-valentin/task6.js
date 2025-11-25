function voterResults(arr) {
  return arr.reduce(
    function (accumulator, voter) {
      if (voter.age >= 18 && voter.age <= 25) {
        accumulator.numYoungPeople++;
        if (voter.voted) {
          accumulator.numYoungVotes++;
        }
      } else if (voter.age >= 26 && voter.age <= 35) {
        accumulator.numMidsPeople++;
        if (voter.voted) {
          accumulator.numMidVotesPeople++;
        }
      } else if (voter.age >= 36 && voter.age <= 55) {
        accumulator.numOldsPeople++;
        if (voter.voted) {
          accumulator.numOldVotesPeople++;
        }
      }

      return accumulator;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(voterResults(voters));
