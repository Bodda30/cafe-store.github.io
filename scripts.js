const products = [
    {
        id: 1,
        name: "Golden Ankh Pendant",
        price: 29.99,
        category: "jewelry",
        description: "A beautiful gold-plated ankh pendant symbolizing life.",
        image: "https://via.placeholder.com/250x150?text=Ankh"
    },
    {
        id: 2,
        name: "Pharaoh's Mask",
        price: 49.99,
        category: "artifacts",
        description: "A replica of the famous pharaoh's mask.",
        image: "https://via.placeholder.com/250x150?text=Pharaoh+Mask"
    },
    {
        id: 3,
        name: "Cotton Tunic",
        price: 19.99,
        category: "clothing",
        description: "Comfortable cotton tunic inspired by ancient Egyptian fashion.",
        image: "https://via.placeholder.com/250x150?text=Tunic"
    },
    {
        id: 4,
        name: "Hieroglyphic Wall Art",
        price: 59.99,
        category: "artifacts",
        description: "Decorative wall art featuring authentic hieroglyphs.",
        image: "https://via.placeholder.com/250x150?text=Wall+Art"
    },
    {
        id: 5,
        name: "Sphinx Figurine",
        price: 34.99,
        category: "artifacts",
        description: "A beautifully crafted sphinx figurine.",
        image: "https://via.placeholder.com/250x150?text=Sphinx"
    },
    {
        id: 6,
        name: "Papyrus Scroll",
        price: 14.99,
        category: "artifacts",
        description: "An authentic reproduction of an ancient papyrus scroll.",
        image: "https://via.placeholder.com/250x150?text=Papyrus"
    },
    {
        id: 7,
        name: "Egyptian Jewelry Box",
        price: 39.99,
        category: "jewelry",
        description: "A decorative jewelry box with ancient designs.",
        image: "https://via.placeholder.com/250x150?text=Jewelry+Box"
    },
    {
        id: 8,
        name: "Sandstone Coaster Set",
        price: 24.99,
        category: "artifacts",
        description: "Set of coasters made from genuine sandstone.",
        image: "https://via.placeholder.com/250x150?text=Coaster+Set"
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
    detailWindow.document.close();
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
