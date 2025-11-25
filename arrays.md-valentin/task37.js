const initialPrices = [5, 4.23, 6.4, 8.09, 3.20];
const formattedPrices = initialPrices.map(price => {
  const priceWithDecimals = price.toFixed(2);
  return `$${priceWithDecimals}`;
});

console.log(formattedPrices);

