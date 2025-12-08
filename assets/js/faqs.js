document.addEventListener("DOMContentLoaded", function () {
  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll(".faqs-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faqs-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // FAQ Category Filtering
  const categoryBtns = document.querySelectorAll(".faqs-tag");
  const faqSections = document.querySelectorAll(".faqs-section");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      // Show/hide sections based on category
      faqSections.forEach((section) => {
        if (category === "all" || section.id === category) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
