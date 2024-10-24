const hamMenu = document.getElementById("hamMenu");
// console.log(hamMenu)
hamMenu.addEventListener("click", () =>{
    // console.log("menu clicked");
    const sidebar = document.getElementById("sidenav-container");
    sidebar.style.width = "250px";
})

const close = document.getElementById("close");
close.addEventListener("click", () =>{
    // console.log("menu clicked");
    const sidebar = document.getElementById("sidenav-container");
    sidebar.style.width = "0";
})


// CAROUSEL

const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let visibleSlides = 3; // Show 3 images at once
let currentIndex = 0;
let autoSlideInterval;

// Function to show the slide based on index
function showSlide(index) {
    const slideWidth = slides[0].offsetWidth; // Get the width of a single slide
    const offset = -index * slideWidth; // Calculate the transform based on current index
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Function to go to the next slide
function nextSlide() {
    // Adjust the index based on the number of visible slides
    if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first slide if we're at the end
    }
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - visibleSlides; // Jump to the last set of visible slides
    }
    showSlide(currentIndex);
}

// Set up button event listeners
prevButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Pause auto-slide on manual interaction
    prevSlide();
    startAutoSlide(); // Resume auto-slide after a delay
});

nextButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Pause auto-slide on manual interaction
    nextSlide();
    startAutoSlide(); // Resume auto-slide after a delay
});

// Auto-slide function
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Automatically slide every 2 seconds
}

// Initialize carousel and auto-slide
showSlide(currentIndex);
startAutoSlide();
