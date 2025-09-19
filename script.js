// No JavaScript needed for active navigation link highlighting as there are no navigation links.

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const languageSelect = document.getElementById('language-select');
    let currentLang = localStorage.getItem('lang') || 'en';

    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', (event) => {
            currentLang = event.target.value;
            localStorage.setItem('lang', currentLang);
            translatePage();
        });
    }

    function translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                if (key === "copyright") {
                    element.innerHTML = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
        // Update placeholders and titles if any
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.placeholder = translations[currentLang][key];
            }
        });
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.title = translations[currentLang][key];
            }
        });
    }

    // Initial translation on load
    translatePage();

    // Scroll Reveal Logic (kept if there are still scroll-reveal elements in the main content)
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

    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('active');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check on load

});
