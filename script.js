/* --- 1. Global Navigation & Scrolling Logic --- */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* --- 2. Awareness Calendar Data & UI --- */
const calendarData = {
    january: { title: "Glaucoma Awareness", desc: "Early detection through advanced pressure mapping is vital for this 'silent' condition." },
    february: { title: "Macular Health", desc: "Focusing on nutritional support and AMD monitoring for senior vision preservation." },
    march: { title: "Workplace Wellness", desc: "Preventing Digital Eye Strain through ergonomic visual management and blue light solutions." },
    april: { title: "Women's Eye Health", desc: "Addressing hormonal changes and dry eye syndromes specific to women's ocular health." },
    may: { title: "UV Protection", desc: "Clinical counseling on the long-term effects of ultraviolet radiation on retinal health." },
    june: { title: "Cataract Awareness", desc: "Understanding lens changes and modern surgical co-management options." },
    july: { title: "Dry Eye Therapy", desc: "Advanced diagnostic assessment for ocular surface disease and tear-film instability." },
    august: { title: "Back to School", desc: "Pediatric assessments and 'Eye See Eye Learn' programs for young students." },
    september: { title: "Sports Vision", desc: "Optimizing visual performance and impact protection for athletes of all levels." },
    october: { title: "Contact Lens Safety", desc: "Promoting hygiene and modern lens technologies for healthy cornea maintenance." },
    november: { title: "Diabetic Eye Care", desc: "Comprehensive retinal screening for diabetic retinopathy and vascular changes." },
    december: { title: "Safe Holiday Sight", desc: "Focusing on ocular safety and preventative care during the winter season." }
};

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.month-btn');
    const label = document.getElementById('active-month-label');
    const title = document.getElementById('focus-title');
    const desc = document.getElementById('focus-description');
    const display = document.getElementById('focus-display');

    if (btns.length > 0 && display) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const data = calendarData[btn.dataset.month];

                display.style.opacity = '0';
                display.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    if(label) label.innerText = btn.dataset.month.toUpperCase();
                    if(title) title.innerText = data.title;
                    if(desc) desc.innerText = data.desc;
                    display.style.opacity = '1';
                    display.style.transform = 'translateX(0)';
                }, 300);
            });
        });
    }
});

/* --- 3. Unified Mobile Menu Logic --- */
const menuBtn = document.querySelector('#mobile-menu');
const dropdown = document.querySelector('#mobile-dropdown');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('is-active'); 
        dropdown.classList.toggle('active'); 
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('is-active');
            dropdown.classList.remove('active');
        });
    });
}

// Ergonomics: Auto-close menu if screen is resized to Desktop width
window.addEventListener('resize', () => {
    if (window.innerWidth > 1150 && dropdown && dropdown.classList.contains('active')) {
        menuBtn?.classList.remove('is-active');
        dropdown?.classList.remove('active');
    }
}); // Fixed missing brackets here

/* --- 4. Contact Form Handling --- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.btn-send') || this.querySelector('.btn-submit-unified');
        
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'SENDING...';
            
            setTimeout(() => {
                alert('Thank you! Your message has been sent to Main St. Optometry.');
                btn.textContent = originalText;
                contactForm.reset();
            }, 1500);
        }
    });
}
// Ensure the menu closes on resize and doesn't overlap the new logo
window.addEventListener('resize', () => {
    if (window.innerWidth > 1150 && dropdown && dropdown.classList.contains('active')) {
        menuBtn?.classList.remove('is-active');
        dropdown?.classList.remove('active');
    }
});