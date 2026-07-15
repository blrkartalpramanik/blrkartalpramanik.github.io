/*=========================================
    Typed.js
=========================================*/

const typed = new Typed("#typing", {
    strings: [
        "Assistant Consultant",
        "Full Stack Developer",
        "Angular Developer",
        "Spring Boot Developer",
        "Java Developer",
        "Node.js Developer"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1800,
    loop: true
});


/*=========================================
        Swiper Slider
=========================================*/

const swiper = new Swiper(".mySwiper", {

    loop: true,

    grabCursor: true,

    centeredSlides: true,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1200: {

            slidesPerView: 3

        }

    }

});


/*=========================================
      Navbar Background on Scroll
=========================================*/

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2,6,23,.95)";
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "none";

    }

});


/*=========================================
       Active Menu Highlight
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        Smooth Scroll
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
       Scroll Reveal Animation
=========================================*/

AOS.init({

    duration: 1000,

    once: true,

    easing: "ease-in-out"

});


/*=========================================
     Profile Image Mouse Effect
=========================================*/

const profile = document.querySelector(".profile-image");

profile.addEventListener("mousemove", (e) => {

    profile.style.transform = "scale(1.03) rotate(2deg)";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "";

});


/*=========================================
        Scroll To Top Button
=========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "scroll-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    }

    else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
       Hero Fade Animation
=========================================*/

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("loaded");

});
