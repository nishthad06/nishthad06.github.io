const slider = document.querySelector('.slider');
let slideIndex = 0;
 
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}
 
function updateSlider() {
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
 
setInterval(nextSlide, 3000);