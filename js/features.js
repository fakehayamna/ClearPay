const filterButtons = document.querySelectorAll(".filter-btn");
const featureCards = document.querySelectorAll(".feature-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    featureCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        cardCategory === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
