document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll("nav ul li a, .scroll-down");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Back-to-top button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        document.addEventListener('DOMContentLoaded', function () {
            const serviceBoxes = document.querySelectorAll('.service-box');
            const popupOverlay = document.getElementById('popup-overlay');
            const popupImage = document.getElementById('popup-image');
            const closeBtn = document.getElementById('close-btn');
        
            serviceBoxes.forEach(box => {
                box.addEventListener('click', function () {
                    const imageUrl = this.getAttribute('data-image');
                    popupImage.src = imageUrl;
                    popupOverlay.style.display = 'flex';
                });
            });
        
            closeBtn.addEventListener('click', function () {
                popupOverlay.style.display = 'none';
            });
        
            popupOverlay.addEventListener('click', function (e) {
                if (e.target === popupOverlay || e.target === closeBtn) {
                    popupOverlay.style.display = 'none';
                }
            });
        });
        
    });
});
