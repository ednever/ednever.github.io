// Scroll animation for text blocks
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('show');
        } else {
            reveal.classList.remove('show');
        }
    });
});

// Change navigation text color on scroll
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const header = document.querySelector('nav');
    const fullscreenBgHeight = document.querySelector('.fullscreen-bg').offsetHeight;

    if (window.scrollY > fullscreenBgHeight) {
        header.style.backgroundColor = '#fff';
        navLinks.forEach(link => {
            link.style.color = '#000'; // Change text to black
        });
    } else {
        header.style.backgroundColor = '';
        navLinks.forEach(link => {
            link.style.color = '#fff'; // Change text back to white
        });
    }
});

// Function to check if an element is in the viewport
/*function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

// Add event listener for scroll
function handleScroll() {
    const servicesSection = document.querySelector('#services');
    if (isElementInViewport(servicesSection)) {
        servicesSection.classList.add('visible');
    }
}

// Initial check
handleScroll();

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);*/

// Intersection Observer setup
document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('#services');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(servicesSection);
});

// Testimonial slider
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.getElementById('next-testimonial');

nextBtn.addEventListener('click', () => {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
});

// FAQ accordion
const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('visible');
    });
});
