const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true }
];
function filterAndSortProducts(productsArray) {
  const filteredProducts = productsArray
    .filter(product => product.inStock)
    .filter(product => product.price >= 10)
    .sort((a, b) => a.price - b.price)
    .map(product => product.title);
  return filteredProducts;
}

const result = filterAndSortProducts(products);
console.log(result);

