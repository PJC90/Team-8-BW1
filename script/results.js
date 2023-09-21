// DEFINIZIONE DELLA CHART DOUGHNUT

let data = {
  datasets: [
    {
      data: [score, 10 - score],
      backgroundColor: ["#00ffff", "#C0128B"],
    },
  ],
};

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
    elements: {},
  },
});

// SCOPE DEI PUNTI IN CUI VERRANNO INSERITE LE PERCENTUALI IN BASE ALLE DOMANDE GIUSTE E SBAGLIATE

const correctSections = document.getElementById("percentageCorrect");
correctSections.innerText = (score / 10) * 100 + "%";

const wrongSection = document.getElementById("percentageWrong");
wrongSection.innerText = (10 - score) * 10 + "%";

const correctAnswers = document.getElementById("correct-answers");
correctAnswers.innerText = score + "/10 questions";

const wrongAnswers = document.getElementById("wrong-answers");
wrongAnswers.innerText = 10 - score + "/10 questions";

// DEFINIZIONE DEL BOTTON "RATE" CHE AZZERA LO SCORE TRAMITE REMOVE ITEM, INOLTRE PORTA ALLA PAG. SUCCESSIVA

const rateButton = document.getElementById("rate-button");
rateButton.addEventListener("click", function () {
  localStorage.removeItem("score");
  score = 0;

  window.open("feedback.html", "_self");
});

// SCOPE DEGLI INNER CHE OSPITERANNO IL TESTO CENTRALE NELLA CHART IN BASE ALLA PERCENTUALE MAGGIORE DEL PUNTEGGIO

const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");
const inner3 = document.getElementById("inner3");

if (score > 5) {
  inner1.innerText = "Congratulations!";
  inner2.innerText = "You passed the exam";
  inner2.style.color = "#00EBEB";
  inner3.innerText =
    "We'll send you the certificate in few minutes. Check your email (including promotions/spam folder)";
} else {
  inner1.innerText = "Sorry";
  inner2.innerText = "You didn't pass the exam!";
  inner2.style.color = "#C2128D";
  inner3.innerText = "You can try again next time, keep working hard!";
}
