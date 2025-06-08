document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Enhanced scroll event for the navigation
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Set active menu item based on scroll position
    function setActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(item => {
                    item.classList.remove('active');
                });
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);

    // Enhanced counter animation for facts section
    function animateCounter() {
        const counters = document.querySelectorAll('.counter');
        const speed = 50; // Increased speed for smoother animation

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / speed;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target.toLocaleString(); // Add number formatting
                }
            };

            updateCount();
        });
    }

    // Start counter animation when the facts section is in view
    const factsSection = document.querySelector('.facts');

    // Create intersection observer for facts section
    const factsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                factsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    if (factsSection) {
        factsObserver.observe(factsSection);
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        }
    });

    // Smooth scrolling for navigation links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced card hover animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for scroll animations
    const cards = document.querySelectorAll('.objective-card, .blog-card, .fact-card, .work-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Hero scroll indicator functionality
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const objectivesSection = document.querySelector('#objectives');
            if (objectivesSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = objectivesSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Add loading animation for page elements
    function initializePageAnimations() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }

    // Initialize page animations after a short delay
    setTimeout(initializePageAnimations, 100);

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic navbar background on scroll
    let ticking = false;

    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        const scrolled = window.pageYOffset;

        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        ticking = false;
    }

    function requestNavbarUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestNavbarUpdate);

    // Add scroll progress indicator
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #42A5F5, #2C5AA0);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }

        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Preload hero image for better performance
    const heroImage = new Image();
    heroImage.src = 'https://public.youware.com/users-website-assets/prod/f0e938be-fe1a-41a2-91ac-f0a406e00f1e/gc7dac67b7bb04b5e19c0acfead74a7bada00ff22363b025c00e03b078ee40785978446babced971b393569f625dbd534948b2f02529b12a0da875b87dcb31d58_640.jpg';
});