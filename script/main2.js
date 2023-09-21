let difficulty = 0;

const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function () {
  difficulty = 1;
  saveDifficultLevel();
  window.open("quiz.html", "_self");
});

mediumButton.addEventListener("click", function () {
  difficulty = 2;
  saveDifficultLevel();
  window.open("quiz.html", "_self");
});

hardButton.addEventListener("click", function () {
  difficulty = 3;
  saveDifficultLevel();
  window.open("quiz.html", "_self");
});

const saveDifficultLevel = function () {
  localStorage.setItem("difficulty", difficulty);
};
