// Typing animation settings
const TEXT_TO_TYPE = "Hi, my name is Kyle Khai Lai";
const TYPING_SPEED = 100;
const TYPING_DELAY = 500;

// Elements
const navigation = document.getElementById('navigation');
const typingText = document.getElementById('typingText');

// Reset to home immediately on any page load
window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    typingText.textContent = '';
    navigation.classList.remove('show');
    document.body.style.overflowY = 'hidden';
});

// Additional reset on full page load
window.addEventListener('load', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    typingText.textContent = '';
    navigation.classList.remove('show');
    document.body.style.overflowY = 'hidden';

    setTimeout(() => {
        startTypingAnimation();
    }, TYPING_DELAY);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    }
});

function startTypingAnimation() {
    let i = 0;

    function typeWriter() {
        if (i < TEXT_TO_TYPE.length) {
            typingText.textContent += TEXT_TO_TYPE.charAt(i);
            i++;
            setTimeout(typeWriter, TYPING_SPEED);
        } else {
            setTimeout(() => {
                navigation.classList.add('show');
                document.body.style.overflowY = 'auto';
                addNavigationHandlers();
            }, 50);
        }
    }

    typeWriter();
}

function addNavigationHandlers() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
