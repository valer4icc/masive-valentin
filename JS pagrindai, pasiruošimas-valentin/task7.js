const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 },
];

const VAT_RATE = 0.21;

const productsWithVAT = products.map((product) => {
  const vatAmount = product.price * VAT_RATE;
  return {
    ...product,
    priceWithVAT: product.price + vatAmount,
  };
});

console.log(productsWithVAT);
