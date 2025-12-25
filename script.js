// --- CUSTOM CURSOR LOGIC ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (handled by CSS transition or simple animation)
    // For smoother high-performance tracking:
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

window.onscroll = function() {
  const logo = document.querySelector(".logo");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logo.style.height = "30px"; // Shrink logo on scroll
  } else {
    logo.style.height = "50px"; // Original size
  }
};

// --- HOVER EFFECTS FOR CURSOR ---
// When hovering over links or buttons, the cursor gets bigger
const interactiveElements = document.querySelectorAll('a, button, .feature-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '70px';
        cursorOutline.style.height = '70px';
        cursorOutline.style.backgroundColor = 'rgba(255, 0, 85, 0.1)'; // Slight glow
        cursorOutline.style.borderColor = 'transparent';
    });

    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = '#ff0055';
    });
});

// --- SMOOTH SCROLL FOR ANCHOR LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});