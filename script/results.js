let data = {
  datasets: [
    {
      data: [score, questions.length - score],
      backgroundColor: ["#00ffff", "#C0128B"],
    },
  ],
};

console.log(score);

let ctx = document.getElementById("myDonutChart").getContext("2d");

let myDonutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Percentuale di Risposte Giuste su 10 Domande",
    },
    cutout: "70%",
    borderWidth: 0,
  },
});

const correctSections = document.getElementById("percentageCorrect");
correctSections.innerText = (score / questions.length) * 100 + "%";

const wrongSection = document.getElementById("percentageWrong");
wrongSection.innerText = (questions.length - score) * 10 + "%";

const correctAnswers = document.getElementById("correct-answers");
correctAnswers.innerText = score + "/10 questions";

const wrongAnswers = document.getElementById("wrong-answers");
wrongAnswers.innerText = questions.length - score + "/10 questions";

const rateButton = document.getElementById("rate-button");
rateButton.addEventListener("click", function () {
  localStorage.removeItem("score");
  score = 0;

  window.location.href = ("feedback.html", "_self");
});
