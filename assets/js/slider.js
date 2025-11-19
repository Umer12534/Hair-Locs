
    // document.addEventListener('DOMContentLoaded', function() {
    //     const slides = document.querySelector('.slides');
    //     const dots = document.querySelectorAll('.dot');
    //     const totalSlides = 4;
    //     let currentSlide = 0;
    //     let slideInterval;

    //     // Function to move to a specific slide
    //     function goToSlide(slideIndex) {
    //         currentSlide = slideIndex;
    //         slides.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
            
    //         // Update active dot
    //         dots.forEach((dot, index) => {
    //             if (index === currentSlide) {
    //                 dot.classList.add('active');
    //             } else {
    //                 dot.classList.remove('active');
    //             }
    //         });
    //     }

    //     // Function to move to next slide
    //     function nextSlide() {
    //         currentSlide = (currentSlide + 1) % totalSlides;
    //         goToSlide(currentSlide);
    //     }

    //     // Start automatic sliding
    //     function startSlider() {
    //         slideInterval = setInterval(nextSlide, 2000);
    //     }

    //     // Add click event to dots
    //     dots.forEach(dot => {
    //         dot.addEventListener('click', function() {
    //             const slideIndex = parseInt(this.getAttribute('data-slide'));
    //             goToSlide(slideIndex);
                
    //             // Reset the timer when manually changing slides
    //             clearInterval(slideInterval);
    //             startSlider();
    //         });
    //     });

    //     // Start the slider
    //     startSlider();
    // });
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});