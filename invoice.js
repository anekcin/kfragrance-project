document.addEventListener("DOMContentLoaded", () => {
    const invoiceDetails = document.getElementById("invoice-details");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        invoiceDetails.innerHTML = "<p>No items purchased yet.</p>";
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    let invoiceHTML = "<ul>";
    cart.forEach(item => {
        invoiceHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    });
    invoiceHTML += `</ul><h3>Total: $${total}</h3>`;

    invoiceDetails.innerHTML = invoiceHTML;

    document.querySelector(".cancel").addEventListener("click", () => {
        localStorage.removeItem("cart");
        alert("Invoice has been cleared!");
        invoiceDetails.innerHTML = "<p>No items purchased yet.</p>";
    });

    document.querySelector(".exit").addEventListener("click", () => {
        window.location.href = "./product.html"; 
    });
});