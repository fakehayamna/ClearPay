
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      menuButton.textContent = isOpen ? "✕" : "☰";
    });


    /* Close menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        menuButton.textContent = "☰";
      });

    });

  }


  /* =========================
     CURRENT YEAR
  ========================= */

  const year = document.querySelector("#current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});

