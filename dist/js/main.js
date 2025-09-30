window.addEventListener("DOMContentLoaded", () => {
  // Tab Cards Filter Configuration
  const filterConfig = [
    {
      buttonId: "all",
      descClass: ".all--desc",
      cardClass: ".card__item",
      showAll: true
    },
    {
      buttonId: "fcc",
      descClass: ".fcc--desc",
      cardClass: ".fcc",
      showAll: false
    },
    {
      buttonId: "personal",
      descClass: ".personal--desc",
      cardClass: ".personal",
      showAll: false
    },
    {
      buttonId: "fed",
      descClass: ".fed--desc",
      cardClass: ".fed",
      showAll: false
    }
  ];

  // DOM Elements
  const allButtons = document.querySelectorAll(".tabCards__btn");
  const allDesc = document.querySelectorAll(".tabCards__filters__desc");
  const allCards = document.querySelectorAll(".card__item");

  // Reusable Filter Function
  function applyFilter(button, desc, cardClass, showAll) {
    // Update button states
    allButtons.forEach(btn => btn.classList.remove("active--btn"));
    button.classList.add("active--btn");

    // Update description states
    allDesc.forEach(desc => desc.classList.remove("active--desc"));
    desc.classList.add("active--desc");

    // Update card visibility
    allCards.forEach(card => card.style.display = showAll ? "block" : "none");
    if (!showAll) {
      document.querySelectorAll(cardClass).forEach(card => card.style.display = "block");
    }
  }

  // Attach Event Listeners
  filterConfig.forEach(({ buttonId, descClass, cardClass, showAll }) => {
    const button = document.getElementById(buttonId);
    const desc = document.querySelector(descClass);
    button?.addEventListener("click", () => applyFilter(button, desc, cardClass, showAll));
  });

  // tabCards Onclick Effect
  document.querySelectorAll(".card__item").forEach(card => {
    card.querySelector("div").addEventListener("click", () => {
      card.classList.toggle("show");
    });
  });
});