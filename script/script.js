const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const quizSection = document.getElementById("question-section");
const quizElement = document.getElementById("question");
const buttonsContainer = document.getElementById("options");

const questionCounter = document.getElementById("question-counter");

let currentIndex = 0;
let score = 0;

const getQuestion = function () {
  const actualQuestion = questions[currentIndex];
  buttonsContainer.textContent = actualQuestion.question;

  if (actualQuestion.type === "multiple") {
    actualQuestion.incorrect_answers.push(actualQuestion.correct_answer);
    actualQuestion.incorrect_answers.forEach((opt) => {
      const buttons = document.createElement("button");
      buttons.textContent = opt;
      buttons.addEventListener("click", () => answerChecking(opt));
      buttonsContainer.appendChild(buttons);
    });
  } else if (actualQuestion.type === "boolean") {
    const buttonTrue = document.createElement("button");
    buttonTrue.textContent = "True";
    buttonTrue.addEventListener("click", () => answerChecking("True"));
    buttonsContainer.appendChild(buttonTrue);

    const buttonFalse = document.createElement("button");
    buttonFalse.textContent = "False";
    buttonFalse.addEventListener("click", () => answerChecking("False"));
    buttonsContainer.appendChild(buttonFalse);
  }
};
const counter = document.getElementById("question-counter");
counter.textContent = 1;

const answerChecking = function (chosenOption) {
  const actualQuestion = questions[currentIndex];
  if (chosenOption === actualQuestion.correct_answer) {
    score++;
  }
  currentIndex++;
  counter.textContent = currentIndex + 1;
  if (currentIndex < questions.length) {
    getQuestion();
  } else {
    showResult();
  }
};

const countdown = function () {
  const countdownElement = document.getElementById("countdown");
  countdownElement.classList.add("active");
  let timeLeft = 60;
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
    } else {
      document.getElementById("seconds").innerText = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
};

countdown();

getQuestion();
