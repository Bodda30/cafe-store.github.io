const products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        category: "electronics",
        description: "High performance laptop for all your needs.",
        image: "https://via.placeholder.com/250x150?text=Laptop"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 19.99,
        category: "clothing",
        description: "Comfortable cotton t-shirt available in various sizes.",
        image: "https://via.placeholder.com/250x150?text=T-Shirt"
    },
    {
        id: 3,
        name: "Headphones",
        price: 89.99,
        category: "electronics",
        description: "Noise-cancelling over-ear headphones.",
        image: "https://via.placeholder.com/250x150?text=Headphones"
    },
    {
        id: 4,
        name: "Wristwatch",
        price: 199.99,
        category: "accessories",
        description: "Stylish wristwatch with leather strap.",
        image: "https://via.placeholder.com/250x150?text=Wristwatch"
    },
    {
        id: 5,
        name: "Jeans",
        price: 49.99,
        category: "clothing",
        description: "Classic blue jeans for everyday wear.",
        image: "https://via.placeholder.com/250x150?text=Jeans"
    },
    {
        id: 6,
        name: "Smartphone",
        price: 699.99,
        category: "electronics",
        description: "Latest model smartphone with high-resolution camera.",
        image: "https://via.placeholder.com/250x150?text=Smartphone"
    },
    {
        id: 7,
        name: "Sneakers",
        price: 89.99,
        category: "clothing",
        description: "Comfortable sneakers for daily wear.",
        image: "https://via.placeholder.com/250x150?text=Sneakers"
    },
    {
        id: 8,
        name: "Backpack",
        price: 49.99,
        category: "accessories",
        description: "Spacious and stylish backpack for everyday use.",
        image: "https://via.placeholder.com/250x150?text=Backpack"
    },
    {
        id: 9,
        name: "Smartwatch",
        price: 149.99,
        category: "accessories",
        description: "Feature-rich smartwatch with fitness tracking.",
        image: "https://via.placeholder.com/250x150?text=Smartwatch"
    },
    {
        id: 10,
        name: "Gaming Console",
        price: 299.99,
        category: "electronics",
        description: "Next-gen gaming console with immersive gameplay.",
        image: "https://via.placeholder.com/250x150?text=Gaming+Console"
    }
];

let cart = [];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="img-fluid" />
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-secondary" onclick="openProductDetails(${product.id})">View Details</button>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortOrder = document.getElementById('sortOrder').value;

    let filteredProducts = products.filter(product => {
        return category === 'all' || product.category === category;
    });

    filteredProducts.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart!`);
}

function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const detailWindow = window.open("", "_blank", "width=600,height=400");
    detailWindow.document.write(`
        <html>
        <head>
            <title>${product.name}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h2>${product.name}</h2>
                <img src="${product.image}" class="img-fluid" />
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <button class="btn btn-primary" onclick="window.opener.addToCart(${product.id});">Add to Cart</button>
                <button class="btn btn-secondary" onclick="window.close();">Close</button>
            </div>
        </body>
        </html>
    `);
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
