let books = [
  { title: 'Book #1', price: 10.25 },
  { title: 'Book #2', price: 5.15 },
  { title: 'Book #3', price: 7.32 },
  { title: 'Book #4', price: 54.01 },
  { title: 'Book #5', price: 77.17 },
];


function displayBooksOverPrice(priceThreshold) {
  const expensiveBooks = books.filter(book => book.price > priceThreshold);
  console.log(`Knygos, kurių kaina didesnė nei ${priceThreshold} EUR:`);
  console.log(expensiveBooks);
}

displayBooksOverPrice(7.5);
