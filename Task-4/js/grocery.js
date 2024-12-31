const groceries = [
    { name: "Beetroot", price: "₹30/kg", description: "Fresh and organic beetroot for healthy meals.", img: "grocery1.webp" },
    { name: "Potato", price: "₹20/kg", description: "Farm-fresh potatoes, perfect for any dish.", img: "grocery2.webp" },
    { name: "Tomato", price: "₹50/kg", description: "Juicy and ripe tomatoes for your kitchen.", img: "grocery3.webp" },
    { name: "Pea", price: "₹30/kg", description: "Fresh green peas to enrich your meals.", img: "grocery4.webp" },
    { name: "Apple", price: "₹120/kg", description: "Crunchy, sweet apples for daily nutrition.", img: "grocery5.webp" },
    { name: "Milk", price: "₹40/ltr", description: "Pure and fresh milk for your daily needs.", img: "grocery6.webp" },
    { name: "Banana", price: "₹30/kg", description: "Fresh bananas packed with essential nutrients.", img: "grocery7.webp" },
    { name: "Rice", price: "₹80/kg", description: "Premium quality rice for perfect meals.", img: "grocery8.webp" }
];

function renderGroceries() {
    const productsContainer = document.querySelector('.products-container');

    groceries.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>${product.price}</span>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(index) {
    const product = groceries[index];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
}

function renderCart() {
    const cartContainer = document.querySelector('#cart-container');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty. Add some items to your cart!</p>`;
    } else {
        cart.forEach((product) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>${product.price}</span>
            `;
            cartContainer.appendChild(cartItem);
        });

        const checkoutButton = document.createElement('button');
        checkoutButton.classList.add('checkout-btn');
        checkoutButton.innerText = "Proceed to Checkout";
        cartContainer.appendChild(checkoutButton);
    }
}

document.addEventListener('DOMContentLoaded', renderGroceries);

if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', renderCart);
}
