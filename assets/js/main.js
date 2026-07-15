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

"Assistant Consultant",

"Full Stack Developer",

"Angular Developer",

"Spring Boot Developer",

"Java Developer",

"Microservices Developer",

"REST API Developer"

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

/* =====================================================
 PROJECT MODAL
===================================================== */


const modal =
document.querySelector(".project-modal");


const closeModal =
document.querySelector(".close-modal");



document.querySelectorAll(".project-card")
.forEach(card=>{


card.addEventListener("click",()=>{


if(modal){

modal.classList.add("active");

}


});


});



if(closeModal){


closeModal.onclick=()=>{


modal.classList.remove("active");


};


}
/* =====================================================
 PROJECT DETAILS MODAL
===================================================== */


const projectCards =
document.querySelectorAll(".project-card");


const modal =
document.getElementById("projectModal");


const closeModal =
document.querySelector(".close-modal");



const modalTitle =
document.getElementById("modalTitle");


const modalDescription =
document.getElementById("modalDescription");


const modalFeatures =
document.getElementById("modalFeatures");


const modalTags =
document.getElementById("modalTags");


const modalGithub =
document.getElementById("modalGithub");


const modalLive =
document.getElementById("modalLive");





projectCards.forEach(card=>{


card.addEventListener("click",()=>{


modal.classList.add("active");



modalTitle.textContent =
card.dataset.title;



modalDescription.textContent =
card.dataset.description;



modalFeatures.innerHTML="";


card.dataset.features
.split("|")
.forEach(feature=>{


let li=document.createElement("li");

li.textContent=feature;

modalFeatures.appendChild(li);


});




modalTags.innerHTML="";


card.dataset.tech
.split("|")
.forEach(item=>{


let span=document.createElement("span");

span.textContent=item;

modalTags.appendChild(span);


});



modalGithub.href =
card.dataset.github;


modalLive.href =
card.dataset.live;



});


});





closeModal.onclick=()=>{


modal.classList.remove("active");


};




modal.onclick=(e)=>{


if(e.target===modal){

modal.classList.remove("active");

}


};
