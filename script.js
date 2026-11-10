// Foodie Hub JavaScript

// Shopping cart
let cart = [];

// Select all order buttons
const orderButtons = document.querySelectorAll(".order-btn");

// Add food to cart
orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const foodName = button.dataset.name;
        const foodPrice = Number(button.dataset.price);

        cart.push({
            name: foodName,
            price: foodPrice
        });

        updateCart();

        alert(foodName + " added to your cart! 🍕");

    });

});

// Update shopping cart
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        total += item.price;

        const food = document.createElement("p");

        food.textContent = item.name + " - ₹" + item.price;

        cartItems.appendChild(food);

    });

    if (cart.length === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;

}

// Checkout button
const checkoutButton = document.getElementById("checkout-btn");

checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty! Please add some food.");

    } else {

        alert("Thank you for ordering from Foodie Hub! ❤️");

        cart = [];

        updateCart();

    }

});

// Welcome message
console.log("Welcome to Foodie Hub!");