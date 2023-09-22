const form = document.getElementById("checkbox");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const proceedBtn = document
  .getElementById("button")
  .addEventListener("click", function () {
    document.querySelector(".container").style.animation =
      "fadeOut 0.5s ease-in-out forwards";

    setTimeout(function () {
      window.location.href = "main2.html";
    }, 1000);
  });
