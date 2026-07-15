/* =====================================================
   PREMIUM PORTFOLIO V2
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVBAR
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

    }

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menuToggle && navMenu) {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            }

        });

    });

    /* =====================================================
       STICKY NAVBAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /* =====================================================
       ACTIVE MENU
    ===================================================== */

    const sections = document.querySelectorAll("section");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", activeMenu);
    activeMenu();

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        revealElements.forEach(el => {

            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < window.innerHeight - 100) {
                el.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingText = document.querySelector(".typing");

    if (typingText) {

        const words = [
            "Assistant Consultant",
            "Full Stack Developer",
            "Angular Developer",
            "Spring Boot Developer",
            "Java Developer",
            "Microservices Developer",
            "REST API Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingText.textContent =
                    currentWord.substring(0, charIndex++);

                if (charIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                typingText.textContent =
                    currentWord.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    charIndex = 0;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }

                }

            }

            setTimeout(type, deleting ? 60 : 120);

        }

        type();

    }

    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* =====================================================
       LAZY LOAD IMAGES
    ===================================================== */

    document.querySelectorAll("img").forEach(img => {
        img.loading = "lazy";
    });

    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const modal = document.getElementById("projectModal");

    if (modal) {

        const closeModal = modal.querySelector(".close-modal");

        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
        const modalFeatures = document.getElementById("modalFeatures");
        const modalTags = document.getElementById("modalTags");
        const modalGithub = document.getElementById("modalGithub");
        const modalLive = document.getElementById("modalLive");

        document.querySelectorAll(".project-card").forEach(card => {

            card.addEventListener("click", () => {

                modal.classList.add("active");

                if (modalTitle)
                    modalTitle.textContent = card.dataset.title || "";

                if (modalDescription)
                    modalDescription.textContent = card.dataset.description || "";

                if (modalFeatures) {

                    modalFeatures.innerHTML = "";

                    if (card.dataset.features) {

                        card.dataset.features.split("|").forEach(feature => {

                            const li = document.createElement("li");

                            li.textContent = feature;

                            modalFeatures.appendChild(li);

                        });

                    }

                }

                if (modalTags) {

                    modalTags.innerHTML = "";

                    if (card.dataset.tech) {

                        card.dataset.tech.split("|").forEach(tech => {

                            const span = document.createElement("span");

                            span.textContent = tech;

                            modalTags.appendChild(span);

                        });

                    }

                }

                if (modalGithub)
                    modalGithub.href = card.dataset.github || "#";

                if (modalLive)
                    modalLive.href = card.dataset.live || "#";

            });

        });

        if (closeModal) {

            closeModal.addEventListener("click", () => {

                modal.classList.remove("active");

            });

        }

        modal.addEventListener("click", (e) => {

            if (e.target === modal) {

                modal.classList.remove("active");

            }

        });

    }

});
