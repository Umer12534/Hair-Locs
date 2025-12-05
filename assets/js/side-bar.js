// JavaScript function for toggling cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    const cartOverlay = document.getElementById("cartOverlay");
    
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active"); // Fixed typo: was "actice"
}