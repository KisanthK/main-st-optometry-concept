/* --- 2379 BURLINGTON ARMY CADETS: CONSOLIDATED LOGIC V3 --- */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const hammy = document.getElementById('hammy');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    // 2. MOBILE NAVIGATION & HAMBURGER (The "Hammy" Engine)
    if (hammy && navMenu) {
        hammy.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            hammy.classList.toggle('active');
            
            // 5S UX: Lock body scroll to prevent disorientation
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });

        // Close mobile menu when any link inside is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hammy.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto'; 
            });
        });
    }

    // 3. TACTICAL DROPDOWN ENGINE
    dropdowns.forEach(dropdown => {
        // Find the clickable link (Resources)
        const toggle = dropdown.querySelector('.nav-item') || dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    // Mobile UX: Prevent navigating to the page so the dropdown can open
                    e.preventDefault(); 
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // 4. CLICK-OUTSIDE ENGINE (Standardizing UX)
    document.addEventListener('click', (e) => {
        // If clicking outside the navbar, close all open menus
        if (navbar && !navbar.contains(e.target)) {
            navMenu?.classList.remove('active');
            hammy?.classList.remove('active');
            document.body.style.overflow = 'auto';
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // 5. NAVBAR SCROLL ENGINE (Tactical Depth)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // 6. SMOOTH SCROLLING (Operational Navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 7. DYNAMIC MAP INJECTION (Precision Location Fix)
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mapWrapper) {
        const address = encodeURIComponent("3230 Fairview St, Burlington, ON L7N 3L5");
        // FIX: Using backticks and ${address} for the variable to work
        mapWrapper.innerHTML = `
            <iframe 
                width="100%" height="450" frameborder="0" style="border:0" 
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${address}" 
                allowfullscreen loading="lazy">
            </iframe>`;
        
        /* NOTE: If you don't have an API key, use this simplified URL: */
        mapWrapper.innerHTML = `
            <iframe width="100%" height="450" frameborder="0" style="border:0"
                src="https://maps.google.com/maps?q=${address}&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowfullscreen></iframe>`;
    }
});