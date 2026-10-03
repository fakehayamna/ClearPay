
document.addEventListener("DOMContentLoaded", () => {

  const themeButton = document.querySelector(".theme-toggle");

  if (!themeButton) return;


  /* =========================
     LOAD SAVED THEME
  ========================= */

  const savedTheme = localStorage.getItem("clearpay-theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute(
      "data-theme",
      "dark"
    );

    updateButton(true);
  }


  /* =========================
     TOGGLE THEME
  ========================= */

  themeButton.addEventListener("click", () => {

    const isDark =
      document.documentElement.getAttribute("data-theme")
      === "dark";

    if (isDark) {

      document.documentElement.removeAttribute(
        "data-theme"
      );

      localStorage.setItem(
        "clearpay-theme",
        "light"
      );

      updateButton(false);

    } else {

      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );

      localStorage.setItem(
        "clearpay-theme",
        "dark"
      );

      updateButton(true);
    }

  });


  /* =========================
     BUTTON TEXT
  ========================= */

  function updateButton(isDark) {

    themeButton.textContent =
      isDark ? "☀️ Light" : "🌙 Dark";

    themeButton.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light theme"
        : "Switch to dark theme"
    );
  }

});

