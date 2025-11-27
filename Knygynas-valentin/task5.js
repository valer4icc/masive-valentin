let books = [
{ title: 'Book #1', price: 10.25 },
{ title: 'Book #2', price: 5.15 },
{ title: 'Book #3', price: 7.32 },
{ title: 'Book #4', price: 54.01 },
{ title: 'Book #5', price: 77.17 },
];

function calculateTotalBookstoreValue() {
  const totalValue = books.reduce((accumulator, currentBook) => {
    return accumulator + currentBook.price;
  }, 0); 

  const formattedValue = totalValue.toFixed(2);
  console.log(`Bendra knygų vertė knygyne yra: ${formattedValue} EUR.`);
  return totalValue;
}

calculateTotalBookstoreValue();
