// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.onclick = function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };
});