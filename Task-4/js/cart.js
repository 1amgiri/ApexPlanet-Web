const cartContainer = document.getElementById("cart-container");

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartContainer.innerHTML = "";

    cart.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.img}" alt="${product.name}" style="width: 100px; height: 100px; object-fit: contain;">
            </div>
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>${product.price}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('checkout-btn');
    checkoutButton.innerText = "Proceed to Checkout";
    cartContainer.appendChild(checkoutButton);
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

document.addEventListener("DOMContentLoaded", loadCart);
