const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.querySelector('.close-modal');
const modalBtn = document.querySelector('.modal-btn');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
   
    simulateFormSubmission(name, email, message)
        .then(() => {
            showModal();
            contactForm.reset();
        })
        .catch(error => {
            console.error('Form submission error:', error);
        });
});

function simulateFormSubmission(name, email, message) {
    return new Promise((resolve) => {
        console.log('Form submitted:', { name, email, message });
        setTimeout(resolve, 1000);
    });
}

function showModal() {
    successModal.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

// Hide modal function
function hideModal() {
    successModal.classList.remove('show');
    document.body.style.overflow = ''; 
}

closeModal.addEventListener('click', hideModal);

modalBtn.addEventListener('click', hideModal);

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        hideModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('show')) {
        hideModal();
    }
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-text, .about-image, .skill-category, .project-card, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0)';
        }
    });
};

const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar span');
    
    skillBars.forEach(bar => {
        const elementPosition = bar.parentElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            bar.style.width = bar.style.width; 
        }
    });
};

window.addEventListener('scroll', () => {
    animateOnScroll();
    animateSkillBars();
});

window.addEventListener('load', () => {
    animateOnScroll();
    animateSkillBars();
});