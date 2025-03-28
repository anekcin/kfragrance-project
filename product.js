//Adding functionality for Products Page
document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach((button, index) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const productName = productCard.querySelector(".product-name").textContent;
            const productPrice = parseFloat(productCard.querySelector(".product-price").textContent.replace("$", ""));
            
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} added to cart!`);
        });
    });

    document.querySelector(".checkout").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage
        window.location.href = "invoice.html"; // Redirect to invoice page
        
        let total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        let cartItems = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join("\n");
        alert(`Checkout Summary:\n${cartItems}\n\nTotal: $${total}`);
    });

    document.querySelector(".cancel").addEventListener("click", () => {
        cart.length = 0;
        alert("Cart has been cleared!");
    });

    document.querySelector(".exit").addEventListener("click", () => {
        window.location.href = "./about.html"; 
    });
});




