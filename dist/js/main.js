window.addEventListener("DOMContentLoaded", () => {
  // Tab Cards Filter
	let allButtons = document.querySelectorAll(".tabCards__btn"),
      btnAll = document.getElementById("all"),
      btnFcc = document.getElementById("fcc"),
      btnPersonal = document.getElementById("personal"),
      btnFed = document.getElementById("fed"),
      allDesc = document.querySelectorAll(".tabCards__filters__desc"),
      descAll = document.querySelector(".all--desc"),
      descFcc = document.querySelector(".fcc--desc"),
      descPersonal = document.querySelector(".personal--desc"),
      descFed = document.querySelector(".fed--desc"),
      allCards = document.querySelectorAll(".card__item"),
      fccCards = document.querySelectorAll(".fcc"),
      personalCards = document.querySelectorAll(".personal"),
      fedCards = document.querySelectorAll(".fed");

    // Filter All Projects
    btnAll?.addEventListener("click", () => {
      for (let button of allButtons) { button.classList.remove('active--btn'); }
      btnAll.classList.add('active--btn');
      for (let desc of allDesc) { desc.classList.remove('active--desc'); }
      descAll.classList.add('active--desc');
      for (let cards of allCards) { cards.style.display = "block"; }
    });

    // Filter FreeCodeCamp Projects
    btnFcc?.addEventListener("click", () => {
      for (let button of allButtons) { button.classList.remove('active--btn'); }
      btnFcc.classList.add("active--btn");
      for (let desc of allDesc) { desc.classList.remove('active--desc'); }
      descFcc.classList.add('active--desc');
      for (let cards of allCards) { cards.style.display = "none"; }
      for (let cards of fccCards) { cards.style.display = "block"; }
    });

    // Filter Personal Projects
    btnPersonal?.addEventListener("click", () => {
      for (let button of allButtons) { button.classList.remove('active--btn'); }
      btnPersonal.classList.add('active--btn');
      for (let desc of allDesc) { desc.classList.remove('active--desc'); }
      descPersonal.classList.add('active--desc');
      for (let cards of allCards) { cards.style.display = "none"; }
      for (let cards of personalCards) { cards.style.display = "block"; }
    });

    // Filter Front-end Development Interview Tasks
    btnFed?.addEventListener("click", () => {
      for (let button of allButtons) { button.classList.remove('active--btn'); }
      btnFed.classList.add('active--btn');
      for (let desc of allDesc) { desc.classList.remove('active--desc'); }
      descFed.classList.add('active--desc');
      for (let cards of allCards) { cards.style.display = "none"; }
      for (let cards of fedCards) { cards.style.display = "block"; }
    });

    // tabCards Onclick Effect
    document.querySelectorAll(".card__item").forEach(function (li) {
      li.querySelector("div").addEventListener("click", function () {
        li.classList.toggle("show");
      });
    });
});