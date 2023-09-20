const proceed = function (e) {
  e.preventDefault();
};

const button = document.getElementsByClassName("button");
button.addeventlistener("click", function () {
  window.location.href("quiz.html");
});
