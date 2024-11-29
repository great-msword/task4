const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5, image: "Assets/smart1.jpeg" },
    { id: 2, name: "T-shirt", category: "clothing", price: 19, rating: 3.8, image: "Assets/tshirt1.jpeg" },
    { id: 3, name: "Microwave", category: "home", price: 99, rating: 4.2, image: "Assets/microwave.jpeg" },
    { id: 4, name: "Laptop", category: "electronics", price: 799, rating: 4.9, image: "Assets/laptop.jpeg" },
    { id: 5, name: "Blender", category: "home", price: 49, rating: 4.1, image: "Assets/blender.jpeg" },
    { id: 6, name: "Jeans", category: "clothing", price: 39, rating: 4.0, image: "Assets/jeans.jpeg" }
];

let filteredProducts = products;
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <p class="rating">⭐ ${product.rating}</p>
            </div>`;
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}
document.querySelectorAll('.category').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

document.getElementById('priceRange').addEventListener('input', filterProducts);

function filterProducts() {
    const selectedCategories = [...document.querySelectorAll('.category:checked')].map(cb => cb.value);
    const maxPrice = document.getElementById('priceRange').value;

    filteredProducts = products.filter(product =>
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        product.price <= maxPrice
    );

    document.getElementById('priceValue').textContent = maxPrice;
    displayProducts(filteredProducts);
}
document.getElementById('sortOptions').addEventListener('change', sortProducts);

function sortProducts() {
    const sortOption = document.getElementById('sortOptions').value;
    filteredProducts.sort((a, b) => {
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'priceLowHigh') return a.price - b.price;
        if (sortOption === 'priceHighLow') return b.price - a.price;
        return 0;
    });
    displayProducts(filteredProducts);
}

displayProducts(products);
