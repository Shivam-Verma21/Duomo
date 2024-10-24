const hamMenu = document.getElementById("hamMenu");
hamMenu.addEventListener("click", () =>{
    const sidebar = document.getElementById("sidenav-container");
    sidebar.style.width = "250px";
})

const close = document.getElementById("close");
close.addEventListener("click", () =>{
    const sidebar = document.getElementById("sidenav-container");
    sidebar.style.width = "0";
})


// CAROUSEL
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let visibleSlides = 3; 
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth; 
    const offset = -index * slideWidth; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}


function nextSlide() {
    if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    showSlide(currentIndex);
}


function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - visibleSlides; 
    }
    showSlide(currentIndex);
}


prevButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval); 
    prevSlide();
    startAutoSlide(); 
});

nextButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval); 
    nextSlide();
    startAutoSlide(); 
});


function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); 
}

showSlide(currentIndex);
startAutoSlide();
