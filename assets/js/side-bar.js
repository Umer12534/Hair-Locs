// JavaScript function for toggling cart sidebar
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const cartOverlay = document.getElementById("cartOverlay");

  cartSidebar.classList.toggle("active");
  cartOverlay.classList.toggle("active"); // Fixed typo: was "actice"
}
function togglenav() {
  const navtabs = document.getElementById("navtabs");

  navtabs.classList.toggle("active");
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    // user is at the top
    backToTop.classList.remove("active");
  } else {
    // user is not at the top
    backToTop.classList.add("active");
  }
});
