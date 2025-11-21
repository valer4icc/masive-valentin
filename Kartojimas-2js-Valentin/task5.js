function sortTasksByPriority(tasks) {
  const sortedTasks = tasks.slice().sort((a, b) => a.priority - b.priority);
  const taskNames = sortedTasks.map((task) => task.task);
  return taskNames;
}

const taskList = [
  { task: "Kartoti JS", priority: 2 },
  { task: "Pasportuoti", priority: 1 },
];

const sortedTaskNames = sortTasksByPriority(taskList);
console.log(sortedTaskNames);
const yourTaskList = [
  { task: "Kartoti JS", priority: 1 },
  { task: "Pasportuoti", priority: 2 },
];
const yourSortedTasks = sortTasksByPriority(yourTaskList);
console.log(yourSortedTasks);
