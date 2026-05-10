// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Toggle Logic
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        
        // Optional: Animate the hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars[0].style.transform = navLinks.classList.contains('show') ? 'rotate(45deg) translate(5px, 6px)' : '';
        bars[1].style.opacity = navLinks.classList.contains('show') ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('show') ? 'rotate(-45deg) translate(5px, -6px)' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Scroll Reveal for Timeline Items
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Unobserve once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});