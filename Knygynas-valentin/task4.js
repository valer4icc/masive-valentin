let books = [
{ title: 'Book #1', price: 10.25 },
{ title: 'Book #2', price: 5.15 },
{ title: 'Book #3', price: 7.32 },
{ title: 'Book #4', price: 54.01 },
{ title: 'Book #5', price: 77.17 },
];

function displayLastBookDetails() {

  if (books.length === 0) {
    console.log("Knygų sąrašas yra tuščias.");
    return;
  }

  const lastBookIndex = books.length - 1;
  const lastBook = books[lastBookIndex];

  console.log(`Paskutinės knygos pavadinimas: "${lastBook.title}"`);
  console.log(`Paskutinės knygos kaina: ${lastBook.price.toFixed(2)} EUR`);
}

displayLastBookDetails();
