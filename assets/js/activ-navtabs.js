// nav active tabs - simpler version
document.addEventListener('DOMContentLoaded', function() {
    // Get current URL path
    const currentPath = window.location.pathname;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-tabs a");
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        
        // Check for exact match or home page
        if (linkPath === currentPath || 
            (linkPath === "#" && currentPath === "/") ||
            (linkPath === "/" && currentPath === "/") ||
            (currentPath.includes(linkPath) && linkPath !== "#" && linkPath !== "/")) {
            
            // Remove active class from all links first
            navLinks.forEach(l => l.classList.remove("nav-active"));
            // Add active class to current link
            link.classList.add("nav-active");
        }
    });
});