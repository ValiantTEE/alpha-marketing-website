"use strict";

/*==================================================
ALPHA MARKETING
APP.JS
==================================================*/


/*==================================================
LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/*==================================================
STICKY NAVBAR
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/*==================================================
BACK TO TOP
==================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
/*==================================================
MOBILE MENU
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

    });

}


/*==================================================
CLOSE MOBILE MENU
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (menuToggle && navLinks) {

            menuToggle.classList.remove("active");

            navLinks.classList.remove("active");

        }

    });

});


/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = button.querySelector("span");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.display = "none";
                other.querySelector(".faq-question span").textContent = "+";

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.textContent = "+";

        } else {

            answer.style.display = "block";
            icon.textContent = "−";

        }

    });

});


/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        let current = 0;

        const step = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {

            current += step;

            if (current >= target) {

                counter.textContent = target;

                observer.unobserve(counter);

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});
/*==================================================
CURSOR GLOW
==================================================*/

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

        cursorGlow.classList.add("active");

    });

    document.addEventListener("mouseleave", () => {

        cursorGlow.classList.remove("active");

    });

}


/*==================================================
SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==================================================
INITIALIZE
==================================================*/

document.documentElement.classList.add("js-loaded");

console.log("Alpha Marketing website initialized successfully.");

/*==================================================
CUSTOM TOAST
==================================================*/

function showToast(message){

    const toast = document.getElementById("toast");

    const text = document.getElementById("toast-message");

    text.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

}
/*==================================================
WEB3FORMS CONTACT FORM
==================================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        const originalText = button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: formData

            });

            const result = await response.json();

            if (result.success) {

                showToast("Thank you! Your message has been sent successfully. We'll contact you within 24 hours.");

                contactForm.reset();

            } else {

                showToast("Unable to send your message. Please try again.");

            }

        } catch (error) {

            showToast("Network error. Please check your internet connection.");

        }

        button.innerHTML = originalText;

        button.disabled = false;

    });

}
