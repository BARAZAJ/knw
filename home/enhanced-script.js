document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Make hamburger button accessible
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
        });
    }

    // Enhanced image lazy loading
    const lazyImages = document.querySelectorAll('.lazy-load');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }

    // Interactive Map Functionality
    function initMap() {
        // Check if map container exists
        const mapContainer = document.getElementById('conservation-interactive-map');
        if (!mapContainer) return;

        // Create map centered on Uganda
        const map = L.map('conservation-interactive-map').setView([1.3733, 32.2903], 7);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Define areas of interest
        const kyogaPolygon = L.polygon([
            [1.5, 32.9],
            [1.8, 33.2],
            [1.9, 33.5],
            [1.7, 33.7],
            [1.4, 33.5],
            [1.2, 33.2]
        ], {
            color: '#42A5F5',
            fillColor: '#42A5F5',
            fillOpacity: 0.5
        }).addTo(map);

        const nilePolyline = L.polyline([
            [3.6, 32.0], // Lake Albert
            [2.3, 32.1],
            [2.0, 32.3],
            [1.7, 32.7],
            [1.5, 33.0], // Lake Kyoga
            [1.2, 33.3],
            [0.7, 33.2],
            [0.4, 33.1], // Owen Falls Dam
            [0.1, 33.0] // Lake Victoria
        ], {
            color: '#2C5AA0',
            weight: 4
        }).addTo(map);

        const wetlandsPolygon = L.polygon([
            [1.6, 33.0],
            [1.9, 33.3],
            [1.8, 33.5],
            [1.5, 33.3]
        ], {
            color: '#4CAF50',
            fillColor: '#4CAF50',
            fillOpacity: 0.5
        }).addTo(map);

        // Add markers for key locations
        const kyogaMarker = L.marker([1.5, 33.0]).addTo(map)
            .bindPopup("<b>Lake Kyoga</b><br>Our main conservation area");

        const jinjaDamMarker = L.marker([0.4, 33.1]).addTo(map)
            .bindPopup("<b>Owen Falls Dam</b><br>Important ecosystem management point");

        // Connect map regions to info panels
        const mapRegions = document.querySelectorAll('.map-region');

        function setActiveRegion(regionName) {
            mapRegions.forEach(region => {
                region.classList.remove('active');
                if (region.dataset.region === regionName) {
                    region.classList.add('active');
                }
            });
        }

        kyogaPolygon.on('click', function() {
            setActiveRegion('kyoga');
            map.flyTo([1.5, 33.0], 9);
        });

        nilePolyline.on('click', function() {
            setActiveRegion('nile');
            map.flyTo([1.7, 32.7], 8);
        });

        wetlandsPolygon.on('click', function() {
            setActiveRegion('wetlands');
            map.flyTo([1.7, 33.3], 10);
        });

        // Make info panels clickable to focus map
        mapRegions.forEach(region => {
            region.addEventListener('click', function() {
                const regionName = this.dataset.region;
                setActiveRegion(regionName);

                if (regionName === 'kyoga') {
                    map.flyTo([1.5, 33.0], 9);
                } else if (regionName === 'nile') {
                    map.flyTo([1.7, 32.7], 8);
                } else if (regionName === 'wetlands') {
                    map.flyTo([1.7, 33.3], 10);
                }
            });
        });
    }

    // Initialize map after a short delay to ensure the container is ready
    setTimeout(initMap, 500);

    // Donation form functionality
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        const customRadio = document.querySelector('input[value="custom"]');
        const customAmountInput = document.getElementById('custom-amount');

        // Toggle custom amount input when custom option is selected
        document.querySelectorAll('input[name="donation-amount"]').forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'custom') {
                    customAmountInput.disabled = false;
                    customAmountInput.focus();
                } else {
                    customAmountInput.disabled = true;
                }
            });
        });

        // Form submission
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get selected amount
            let amount;
            const selectedAmount = document.querySelector('input[name="donation-amount"]:checked').value;
            if (selectedAmount === 'custom') {
                amount = document.getElementById('custom-amount').value;
            } else {
                amount = selectedAmount;
            }

            // Get selected frequency
            const frequency = document.querySelector('input[name="donation-frequency"]:checked').value;

            // Show success message (in production, this would redirect to payment processing)
            alert(`Thank you for your ${frequency} donation of $${amount}! In a production environment, you would be redirected to a secure payment page.`);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // In production, this would submit to a newsletter service
            alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
            emailInput.value = '';
        });
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Social sharing functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl;
            if (this.querySelector('.fa-facebook-f')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            } else if (this.querySelector('.fa-twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            } else if (this.querySelector('.fa-linkedin-in')) {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
            }

            window.open(shareUrl, 'share-window', 'height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        });
    });

    // Enhance keyboard navigation
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    document.addEventListener('keydown', function(e) {
        // Escape key closes modals and dropdowns
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal.active');
            modals.forEach(modal => modal.classList.remove('active'));
        }
    });

    // Smooth scrolling to section when clicking on navigation links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }

                // Scroll to target
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});