const items = [
    { name: 'Phone', description: 'A very nice smartphone with good camera', price: 500 },
    { name: 'Laptop', description: 'Powerful laptop for work and games', price: 1200 },
    { name: 'Headphones', description: 'Great sound quality and comfortable fit', price: 150 }
];

function generateShortDescriptions(productArray) {
    return productArray.map(item => {
        const shortDescription = item.description.length > 25
            ? `${item.description.substring(0, 25)}...`
            : item.description;

        return `${item.name} (${item.price}€): ${shortDescription}`;
    });
}

const descriptions = generateShortDescriptions(items);
console.log(descriptions);
