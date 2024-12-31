const products = [
    { name: "Smart Watch", price: "₹4000", desc: "Keep track of your daily activities.", image: "product1.webp", category: "electronics" },
    { name: "VR Set", price: "₹40,000", desc: "Experience immersive virtual reality.", image: "product2.webp", category: "electronics" },
    { name: "Formal Pant", price: "₹900", desc: "Comfortable and stylish design.", image: "product4.webp", category: "fashion" },
    { name: "Sofa", price: "₹15,000", desc: "Relax with premium comfort.", image: "product5.webp", category: "furniture" },
    { name: "Cushion Chair", price: "₹6,000", desc: "Stylish seating for any room.", image: "product6.webp", category: "furniture" },
    { name: "T-Shirt", price: "₹400", desc: "Casual and breathable fabric.", image: "product8.webp", category: "fashion" },
    { name: "LED TV", price: "₹20,000", desc: "High-quality entertainment.", image: "product3.webp", category: "electronics" },
    { name: "Washing Machine", price: "₹23,000", desc: "Front-Load Washing Machine", image: "product7.webp", category: "electronics" }
];

let cart = [];

function renderProducts(category = "all") {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

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

document.addEventListener("DOMContentLoaded", () => renderProducts());
