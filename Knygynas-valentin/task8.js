let books = [
{ title: 'Z Book #1', price: 10.25 },
{ title: 'A Book #2', price: 5.15 },
{ title: 'C Book #3', price: 7.32 },
{ title: 'B Book #4', price: 54.01 },
{ title: 'Y Book #5', price: 77.17 },
];

function sortBooksTitleAscending() {
  const sortedBooks = [...books].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  console.log("--- Knygos, surikiuotos pagal pavadinimą nuo A iki Z:");
  console.log(sortedBooks);
  return sortedBooks;
}

sortBooksTitleAscending();
