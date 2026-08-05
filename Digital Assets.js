// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
const hamburger = document.getElementById("hamburger");
const navTabs = document.getElementById("navTabs");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navTabs.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll("#navTabs a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navTabs.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".headtab")) {
      hamburger.classList.remove("active");
      navTabs.classList.remove("active");
    }
  });
}

// ============================================
// FEATURE ITEM ANIMATIONS
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const featureItems = document.querySelectorAll(".feature-item");

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  featureItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });
});

// ============================================
// BACK TO TOP BUTTON FUNCTIONALITY
// ============================================
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  });
}
