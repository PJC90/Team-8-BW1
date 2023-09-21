let difficulty = 0;

const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");

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

const saveDifficultLevel = function () {
  localStorage.setItem("difficulty", difficulty);
};
