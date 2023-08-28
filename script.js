document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  
  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetPosition = targetSection.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }


  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopButton.addEventListener("click", scrollToTop);

  // cookies
  acceptCookiesButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
  }

})
