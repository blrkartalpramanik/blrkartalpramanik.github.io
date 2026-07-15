/* =====================================================
   PREMIUM PORTFOLIO V2
   MAIN JAVASCRIPT
===================================================== */



/* =====================================================
   MOBILE NAVBAR TOGGLE
===================================================== */


const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");



if(menuToggle){

    menuToggle.addEventListener("click",()=>{


        menuToggle.classList.toggle("active");


        navMenu.classList.toggle("active");


    });

}





/* Close Menu After Clicking Link */


const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        menuToggle.classList.remove("active");


        navMenu.classList.remove("active");


    });


});







/* =====================================================
   STICKY NAVBAR
===================================================== */


const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.classList.add("scrolled");


    }

    else{


        navbar.classList.remove("scrolled");


    }



});







/* =====================================================
   ACTIVE MENU ON SCROLL
===================================================== */


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 120;


        const sectionHeight =
        section.clientHeight;



        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(
            link.getAttribute("href")
            ==
            "#" + current
        ){

            link.classList.add("active");

        }


    });



});







/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


const revealElements =
document.querySelectorAll(".reveal");



function revealOnScroll(){


    revealElements.forEach(element=>{


        const windowHeight =
        window.innerHeight;


        const elementTop =
        element.getBoundingClientRect().top;



        if(elementTop < windowHeight - 100){


            element.classList.add("active");


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* =====================================================
   BACK TO TOP BUTTON
===================================================== */


const backTop =
document.querySelector(".back-top");



if(backTop){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }

    else{


        backTop.classList.remove("show");


    }



});



backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}







/* =====================================================
   TYPING EFFECT
===================================================== */


const typingText =
document.querySelector(".typing");



if(typingText){


const words=[

"Full Stack Developer",

"Angular Developer",

"Spring Boot Developer",

"Java Developer",

"Software Engineer"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typing(){


    const currentWord =
    words[wordIndex];



    if(!deleting){


        typingText.textContent =
        currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex >
        currentWord.length){


            deleting=true;


            setTimeout(
                typing,
                1500
            );

            return;

        }



    }

    else{


        typingText.textContent =
        currentWord.substring(
            0,
            charIndex--
        );



        if(charIndex===0){


            deleting=false;


            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex=0;

            }


        }


    }



    setTimeout(
        typing,
        deleting ? 70 : 120
    );

}



typing();


}







/* =====================================================
   CURRENT YEAR FOOTER
===================================================== */


const year =
document.querySelector("#year");



if(year){


    year.textContent =
    new Date().getFullYear();


}







/* =====================================================
   IMAGE LAZY LOAD
===================================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.setAttribute(
        "loading",
        "lazy"
    );


});
