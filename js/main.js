(function ($) {
  "use strict";

  // Spinner - Optimized for faster load removal
  document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => document.getElementById("spinner")?.remove(), 200);
  });

  // Initiate WOW.js after page load
  window.addEventListener("load", () => new WOW().init());

  // Sticky Navbar with better performance
  window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".sticky-top");
      if (navbar) {
          navbar.classList.toggle("shadow-sm", window.scrollY > 300);
          navbar.style.top = window.scrollY > 300 ? "0px" : "-100px";
      }
  });

  // Back to top button with smooth scrolling
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
      window.addEventListener("scroll", () => {
          backToTop.classList.toggle("active", window.scrollY > 300);
      });
      backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }

  // Counter Up (Performance optimized)
  if ($.fn.counterUp) {
      $("[data-toggle='counter-up']").counterUp({ delay: 10, time: 1500 });
  }

  // Logo enhancement on scroll
  window.addEventListener("scroll", () => {
      const logoImg = document.querySelector(".logo-img");
      const logoContainer = document.querySelector(".logo-container");
      if (logoImg) logoImg.classList.toggle("scrolled", window.scrollY > 50);
      if (logoContainer) {
          logoContainer.style.background = window.scrollY > 50
              ? "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,249,251,0.9))"
              : "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,249,251,0.8))";
      }
  });

  // Comments Section
  document.addEventListener("DOMContentLoaded", function () {
      const commentForm = document.querySelector(".comments textarea");
      const postCommentButton = document.querySelector(".comments button");
      const commentsContainer = document.querySelector(".comments .mt-4");
  
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
  
          commentDiv.querySelector(".reply-btn").addEventListener("click", function (event) {
              event.preventDefault();
              addReplyBox(commentDiv);
          });
  
          return commentDiv;
      }
  
      function addReplyBox(commentDiv) {
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
  
          replyBox.querySelector("button").addEventListener("click", function () {
              const replyText = replyBox.querySelector("textarea").value.trim();
              if (replyText) {
                  const replyElement = createCommentElement("You", new Date().toLocaleDateString(), replyText);
                  replyElement.classList.add("ms-4");
                  commentDiv.querySelector(".replies").appendChild(replyElement);
                  replyBox.remove();
              }
          });
      }
  
      postCommentButton.addEventListener("click", function () {
          const commentText = commentForm.value.trim();
          if (commentText) {
              const newComment = createCommentElement("You", new Date().toLocaleDateString(), commentText);
              commentsContainer.appendChild(newComment);
              commentForm.value = "";
          }
      });
  });

  // Smooth animation for elements on scroll
  document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("animate__animated", "animate__fadeInUp");
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll(".card").forEach(card => observer.observe(card));
  });

  // Date & Time Picker Initialization
  if ($.fn.datetimepicker) {
      $(".date").datetimepicker({ format: "L" });
      $(".time").datetimepicker({ format: "LT" });
  }

  // Smooth Scroll Reveal
  document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.2 });

      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  });

  // Optimized Carousels
  [".header-carousel", ".testimonial-carousel"].forEach(selector => {
      if ($(selector).length) {
          $(selector).owlCarousel({
              autoplay: true,
              smartSpeed: 1000,
              loop: true,
              nav: false,
              dots: true,
              items: 1,
              dotsData: true
          });
      }
  });

})(jQuery);