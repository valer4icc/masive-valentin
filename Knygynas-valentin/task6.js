let books = [
  { title: "Book #1", price: 10.25 },
  { title: "Book #2", price: 5.15 },
  { title: "Book #3", price: 7.32 },
  { title: "Book #4", price: 54.01 },
  { title: "Book #5", price: 77.17 },
];

function applyConditionalDiscount() {
  const discountRate = 0.25; // 25%

  console.log("Knygos su pritaikyta 25% nuolaida (kaina > 10 EUR):");

  books.forEach((book) => {
    if (book.price > 10) {
      const discountedPrice = book.price * (1 - discountRate);
      console.log(
        `Knyga: "${book.title}", Pradinė kaina: ${book.price.toFixed(
          2
        )} EUR, Nauja kaina: ${discountedPrice.toFixed(2)} EUR`
      );
    }
  });
}
applyConditionalDiscount();

