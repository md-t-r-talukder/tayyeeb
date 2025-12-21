// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('.navbar');
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// ACTIVE LINK HIGHLIGHTING ON SCROLL
// ========================================

window.addEventListener('scroll', () => {
    let current = '';
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in view (with offset for navbar)
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    if (current) {
        const activeLink = document.querySelector(`a[href="#${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for valid section links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70; // Navbar height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form no longer auto-submits to a server-side service.
// Submissions should use the 'Send Using Email App' button which opens the user's mail client.

// ========================================
// OPEN DEFAULT EMAIL CLIENT (mailto:) FALLBACK
// ========================================
const openMailBtn = document.getElementById('openMailBtn');
if (openMailBtn) {
    openMailBtn.addEventListener('click', function () {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const formData = new FormData(form);
        const userEmail = (formData.get('_replyto') || '').toString().trim();
        const subject = (formData.get('subject') || '').toString().trim();
        const message = (formData.get('message') || '').toString().trim();

        if (!userEmail || !subject || !message) {
            showNotification('Please fill in email, subject, and message before opening your email app.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        const recipient = 'tayyeeb00@gmail.com';
        const body = `Message:%0A%0A${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(userEmail)}`;
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open user's default mail client
        window.location.href = mailto;
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease-in-out;
        max-width: 90%;
        word-wrap: break-word;
    `;
    
    // Add animation styles if not already present
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ========================================
// FADE IN ANIMATIONS ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill tags, project cards, and cert cards
document.querySelectorAll('.skill-tag, .project-card, .cert-card, .education-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Set active link on page load
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
        const firstLink = document.querySelector(`a[href="#${sections[0].id}"]`);
        if (firstLink) {
            firstLink.classList.add('active');
        }
    }
    
    // Log portfolio loaded (for debugging)
    console.log('Portfolio loaded successfully');
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        // Add animation style if not present
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', 'true');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ========================================
// SCROLL TO TOP FUNCTIONALITY
// ========================================

// Create scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'var(--color-primary-dark)';
    this.style.transform = 'translateY(-3px)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'var(--color-primary)';
    this.style.transform = 'translateY(0)';
});
