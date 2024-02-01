// script.js
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var servicesSection = document.getElementById("services");
    var scrollPosition = window.scrollY;

    function onScroll() {
        scrollPosition = window.scrollY;

        if (scrollPosition > 50) { // Adjust the scroll threshold as needed
            header.classList.add('scrolled');

        } else {
            header.classList.remove('scrolled');
        }
        var servicesPosition = servicesSection.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (servicesPosition < windowHeight / 1.5) {
            servicesSection.classList.add("visible");
        }
    }

    window.addEventListener('scroll', onScroll);
});
