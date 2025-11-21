function processTasks(tasks) {
  const truncatedTasks = tasks.length > 5 ? tasks.slice(0, 5) : tasks;

  truncatedTasks.sort();

  return truncatedTasks;
}

const longTaskList = [
  "Mokytis JS","Kartuoti","Sportuoti","Sutvarkyti kambarį","Paskaityti","Išnešti šiukšles"];

const processedLongList = processTasks(longTaskList);
console.log(processedLongList);


