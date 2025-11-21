function Motivacija(tasks) {
  const modifiedTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    const originalTask = tasks[i];
    const newTask = originalTask + " - Aš galiu!";
    modifiedTasks.push(newTask);
  }
  return modifiedTasks;
}

const currentTasks = ["Kartoti JS", "Sportuoti", "Perskaityti dokumentacią"];

const completedTasks = Motivacija(currentTasks);
console.log(completedTasks);
