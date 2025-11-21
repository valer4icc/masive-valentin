function countPages(X) {
  let minutesElapsed = 0;
  let pagesRead = 0;

  if (X < 10) {
    return 0;
  }

  do {
    minutesElapsed += 10;
    pagesRead++;
  } while (minutesElapsed + 10 <= X);

  return pagesRead;
}

console.log(countPages(35));


