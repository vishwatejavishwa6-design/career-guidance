// JavaScript for active navigation link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop();
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (linkHref === currentHash && currentHash !== '')) {
            link.classList.add('active');
        } else if (linkHref.startsWith('#') && linkHref === currentHash) {
            link.classList.add('active');
        }
    });

    // Scroll Reveal Logic
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(element => {
        observer.observe(element);
    });

    // Function to apply scroll-reveal to dynamically loaded cards
    window.applyScrollRevealToCards = (containerId, cardSelector) => {
        const container = document.getElementById(containerId);
        if (container) {
            const cards = container.querySelectorAll(cardSelector);
            cards.forEach((card, index) => {
                card.classList.add('scroll-reveal');
                card.style.setProperty('--animation-order', index);
                observer.observe(card);
            });
        }
    };
    
    // Apply scroll-reveal to new static sections on load
    applyScrollRevealToCards('subject-choices-10th', '.subject-choice-card');
    applyScrollRevealToCards('polytechnic-courses', '.polytechnic-card');
});
