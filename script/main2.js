let difficulty = 0;

const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function () {
  difficulty = 1;
  saveDifficultLevel();
  document.querySelector(".container").style.animation =
    "fadeOut 1s ease-in-out forwards";

  setTimeout(function () {
    window.location.href = "quiz.html";
  }, 1000);
});

mediumButton.addEventListener("click", function () {
  difficulty = 2;
  saveDifficultLevel();
  document.querySelector(".container").style.animation =
    "fadeOut 1s ease-in-out forwards";

  setTimeout(function () {
    window.location.href = "quiz.html";
  }, 1000);
});

hardButton.addEventListener("click", function () {
  difficulty = 3;
  saveDifficultLevel();
  document.querySelector(".container").style.animation =
    "fadeOut 1s ease-in-out forwards";

  setTimeout(function () {
    window.location.href = "quiz.html";
  }, 1000);
});

const saveDifficultLevel = function () {
  localStorage.setItem("difficulty", difficulty);
};
