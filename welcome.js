document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("currentUser") || "Guest";
    document.getElementById("welcomeMessage").textContent = `Welcome to K-Fragrances, ${userName}!`;
});