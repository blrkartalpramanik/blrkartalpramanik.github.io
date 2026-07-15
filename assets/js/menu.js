
// document.addEventListener('DOMContentLoaded', function () {

//     function startSlider(sliderClass) {
//         const slides = document.querySelectorAll(`.${sliderClass} img`);

//         if (slides.length === 0) return;

//         let current = 0;

//         setInterval(() => {
//             slides[current].classList.remove('active');
//             current = (current + 1) % slides.length;
//             slides[current].classList.add('active');
//         }, 3000);
//     }

//     startSlider('left-slider');
//     startSlider('right-slider');

// });

// document.addEventListener("DOMContentLoaded", () => {

//     const leftSlides = document.querySelectorAll(".left-slider img");
//     const rightSlides = document.querySelectorAll(".right-slider img");

//     let current = 0;

//     function showSlide(index) {

//         leftSlides.forEach(img => img.classList.remove("active"));
//         rightSlides.forEach(img => img.classList.remove("active"));

//         leftSlides[index].classList.add("active");
//         rightSlides[index].classList.add("active");
//     }

//     document.querySelector(".next").addEventListener("click", () => {
//         current = (current + 1) % leftSlides.length;
//         showSlide(current);
//     });

//     document.querySelector(".prev").addEventListener("click", () => {
//         current = (current - 1 + leftSlides.length) % leftSlides.length;
//         showSlide(current);
//     });

//     setInterval(() => {
//         current = (current + 1) % leftSlides.length;
//         showSlide(current);
//     }, 5000);

// });


const leftSlides = document.querySelectorAll(".left-slider img");
const rightSlides = document.querySelectorAll(".right-slider img");

let current = 0;

function updateSlider(slides, newIndex) {

    slides.forEach(slide => {
        slide.classList.remove("active", "prev-slide");
    });

    slides[current].classList.add("prev-slide");
    slides[newIndex].classList.add("active");
}

function showSlide(newIndex) {

    updateSlider(leftSlides, newIndex);
    updateSlider(rightSlides, newIndex);

    current = newIndex;
}

document.querySelector(".next").addEventListener("click", () => {
    showSlide((current + 1) % leftSlides.length);
});

document.querySelector(".prev").addEventListener("click", () => {
    showSlide((current - 1 + leftSlides.length) % leftSlides.length);
});

setInterval(() => {
    showSlide((current + 1) % leftSlides.length);
}, 5000);
