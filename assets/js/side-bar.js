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

// JavaScript function for back to top button
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

const whatsappIcon = document.getElementById("whatsappIcon");
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const footerRect = footer.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    // user is at the top
    whatsappIcon.classList.add("display-none");
  } else {
    // user is not at the top
    whatsappIcon.classList.remove("display-none");
  }
});
