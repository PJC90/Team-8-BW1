const proceed = function (e) {
  e.preventDefault();
  location.assign("quiz.html");
};

const button = document.getElementsByClassName("button");
button.addeventlistener("click", function () {
  window.location.href("quiz.html");
});
