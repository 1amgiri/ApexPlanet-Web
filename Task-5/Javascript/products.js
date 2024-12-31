const products = [
    { name: "Smart Watch", price: "₹4000", desc: "Keep track of your daily activities.", image: "Smart Watch.webp", category: "electronics" },
    { name: "VR Set", price: "₹40,000", desc: "Experience immersive virtual reality.", image: "VR Set.webp", category: "electronics" },
    { name: "Formal Pant", price: "₹900", desc: "Comfortable and stylish design.", image: "Formal Pant.webp", category: "fashion" },
    { name: "Sofa", price: "₹15,000", desc: "Relax with premium comfort.", image: "Sofa.webp", category: "furniture" },
    { name: "Cushion Chair", price: "₹6,000", desc: "Stylish seating for any room.", image: "Cushion Chair.webp", category: "furniture" },
    { name: "T-Shirt", price: "₹400", desc: "Casual and breathable fabric.", image: "T-Shirt.webp", category: "fashion" },
    { name: "LED TV", price: "₹20,000", desc: "High-quality entertainment.", image: "LED TV.webp", category: "electronics" },
    { name: "Washing Machine", price: "₹23,000", desc: "Front-Load Washing Machine", image: "Washing Machine.webp", category: "electronics" }
];

let cart = [];

function renderProducts(category = "all", searchQuery = "") {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    let filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <span>${product.price}</span>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productName) {
    const product = products.find(item => item.name === productName);
    cart.push(product);
    alert(`${productName} added to cart!`);
    localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll(".categories button").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        renderProducts(category);
    });
});

document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();
    const searchQuery = document.getElementById("search-input").value;
    renderProducts("all", searchQuery);
});

document.addEventListener("DOMContentLoaded", () => renderProducts());
