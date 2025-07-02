        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Animate education and experience cards with stagger
        function revealStaggered(selector) {
            const cards = document.querySelectorAll(selector);
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry, idx) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, idx * 180); // stagger delay
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            cards.forEach(card => observer.observe(card));
        }

        revealStaggered('.education-card');
        revealStaggered('.experience-card');

        // Animate section titles
        function revealTitle(selector) {
            const el = document.querySelector(selector);
            if (!el) return;
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(el);
        }
        revealTitle('.education h2');
        revealTitle('.experience h2');
    