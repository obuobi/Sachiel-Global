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
    // Add this to your existing main.js file

// Logo enhancement on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar")
    const logoImg = document.querySelector(".logo-img")
    const logoContainer = document.querySelector(".logo-container")
  
    // Initial animation
    setTimeout(() => {
      if (logoContainer) {
        logoContainer.style.transform = "translateY(0)"
        logoContainer.style.opacity = "1"
      }
    }, 300)
  
    // Scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        if (logoImg) logoImg.classList.add("scrolled")
        if (logoContainer)
          logoContainer.style.background =
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,251,0.9) 100%)"
      } else {
        if (logoImg) logoImg.classList.remove("scrolled")
        if (logoContainer)
          logoContainer.style.background = "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,251,0.8) 100%)"
      }
    })
  })
  
  document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.querySelector(".comments textarea");
    const postCommentButton = document.querySelector(".comments button");
    const commentsContainer = document.querySelector(".comments .mt-4");
  
    // Function to create a new comment element
    function createCommentElement(username, date, text) {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment", "mb-3");
      commentDiv.innerHTML = `
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img src="img/testimonial-3.jpg" alt="Commenter" class="rounded-circle me-3" width="40" />
            <div>
              <strong>${username}</strong>
              <span class="text-muted">${date}</span>
            </div>
          </div>
          <a href="#" class="text-muted reply-btn">Reply</a>
        </div>
        <p class="mt-2">${text}</p>
        <div class="replies"></div>
      `;
  
      // Add reply functionality
      commentDiv.querySelector(".reply-btn").addEventListener("click", function (event) {
        event.preventDefault();
        addReplyBox(commentDiv);
      });
  
      return commentDiv;
    }
  
    // Function to add a reply box
    function addReplyBox(commentDiv) {
      // Remove existing reply box if already present
      const existingReplyBox = commentDiv.querySelector(".reply-box");
      if (existingReplyBox) {
        existingReplyBox.remove();
        return;
      }
  
      const replyBox = document.createElement("div");
      replyBox.classList.add("reply-box", "mt-2");
      replyBox.innerHTML = `
        <textarea class="form-control mb-2" rows="2" placeholder="Reply..."></textarea>
        <button class="btn btn-sm btn-outline-body">Reply</button>
      `;
  
      commentDiv.querySelector(".replies").appendChild(replyBox);
  
      // Handle reply submission
      replyBox.querySelector("button").addEventListener("click", function () {
        const replyText = replyBox.querySelector("textarea").value.trim();
        if (replyText) {
          const replyElement = createCommentElement("You", new Date().toLocaleDateString(), replyText);
          replyElement.classList.add("ms-4"); // Indent reply
          commentDiv.querySelector(".replies").appendChild(replyElement);
          replyBox.remove(); // Remove reply box after posting
        }
      });
    }
  
    // Post new comment
    postCommentButton.addEventListener("click", function () {
      const commentText = commentForm.value.trim();
      if (commentText) {
        const newComment = createCommentElement("You", new Date().toLocaleDateString(), commentText);
        commentsContainer.appendChild(newComment);
        commentForm.value = ""; // Clear textarea after posting
      }
    });
  });
  
  
  // Add animation classes when elements come into view
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1});
    
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  
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
