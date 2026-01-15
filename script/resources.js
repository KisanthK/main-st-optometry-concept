/* 2379 BURLINGTON ARMY CADETS - UNIFIED LOGIC */
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const toggleCheckbox = document.getElementById('nav-toggle');

    // 1. NAV MANAGEMENT: Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    // 2. MOBILE INTERACTION (Hamburger Logic)
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active'); // Animates Hamburger to 'X'
        });
    }

    // Auto-close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (toggleCheckbox) toggleCheckbox.checked = false;
        });
    });

    // 3. REVEAL ENGINE: Tactical Entrance Animations
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = "";
                entry.target.style.transform = "";
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-block, .glass-card, .reveal, .schedule-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
        revealObserver.observe(el);
    });
});
// 2. MOBILE INTERACTION (Refined UX)
if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // 5S UX: Lock body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Auto-close and unlock scroll when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    });
});
const mobileToggle = document.querySelector('.mobile-toggle');