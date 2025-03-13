(function ($) {
    "use strict";

    // Spinner - Remove after load
    $(window).on("load", function () {
        $("#spinner").fadeOut(300, function () {
            $(this).remove();
        });
    });

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar with better performance
    $(window).on("scroll", function () {
        $(".sticky-top").toggleClass("shadow-sm", $(this).scrollTop() > 300)
            .css("top", $(this).scrollTop() > 300 ? "0px" : "-100px");
    });

    // Back to top button with requestAnimationFrame for smooth scrolling
    const backToTop = $(".back-to-top");
    $(window).on("scroll", function () {
        backToTop.toggleClass("active", $(this).scrollTop() > 300);
    });

    backToTop.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutExpo");
        return false;
    });

    // Counter Up (Performance optimized)
    if ($.fn.counterUp) {
        $("[data-toggle='counter-up']").counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Date & Time Picker Initialization (Ensures correct format)
    if ($.fn.datetimepicker) {
        $(".date").datetimepicker({ format: "L" });
        $(".time").datetimepicker({ format: "LT" });
    }

    // Smooth Scroll Reveal using Intersection Observer (Better performance)
    document.addEventListener("DOMContentLoaded", function () {
        const revealElements = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Stop observing after reveal
                }
            });
        }, { threshold: 0.2 });

        revealElements.forEach(element => revealObserver.observe(element));
    });

    // Header Carousel - Optimized
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true
    });

    // Testimonials Carousel - Optimized
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true
    });

})(jQuery);
