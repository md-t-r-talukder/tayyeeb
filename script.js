// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    contactForm.reset();
    alert('Message sent successfully!');
});

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (data.name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (data.message.length < 10) {
        alert('Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}

// Image modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const memoryCards = document.querySelectorAll('.memory-card');

memoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.dataset.image;
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});