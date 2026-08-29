// ===============================
// FRAMEWORK STUDIO
// script.js
// ===============================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});



// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.padding = "15px 10%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(0,0,0,.90)";
        header.style.padding = "20px 10%";
        header.style.boxShadow = "none";

    }

});



// ===============================
// Reveal On Scroll
// ===============================

const reveals = document.querySelectorAll(

    ".service-card, .why-card, .project-card, .testimonial-card, .step, .contact-card"
);

function revealElements() {

    reveals.forEach(card => {

        const top = card.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();



// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

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



// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("showTop");

    }

    else {

        topButton.classList.remove("showTop");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ===============================
// Hero Fade In
// ===============================

window.addEventListener("load", () => {

    document.querySelector(".hero-content").classList.add("show");

    document.querySelector(".hero-image").classList.add("show");

});



// ===============================
// Console Message
// ===============================

console.log(

    "%cFramework Studio",

    "font-size:20px;color:#caa85c;font-weight:bold;"

);

console.log("Designed & Developed by Framework Studio.");
