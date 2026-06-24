document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-custom");
  if (!navbar) return;

  function updateNavbarState() {
    if (window.scrollY > 8) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  }

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState, { passive: true });
});
