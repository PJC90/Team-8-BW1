const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Who is the original author of the realtime physics engine called PhysX?',
    correct_answer: 'NovodeX',
    incorrect_answers: ['Ageia', 'Nvidia', 'AMD'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which data structure does FILO apply to?',
    correct_answer: 'Stack',
    incorrect_answers: ['Queue', 'Heap', 'Tree'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of the following is the oldest of these computers by release date?',
    correct_answer: 'TRS-80',
    incorrect_answers: ['Commodore 64', 'ZX Spectrum', 'Apple 3'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'America Online (AOL) started out as which of these online service providers?',
    correct_answer: 'Quantum Link',
    incorrect_answers: ['CompuServe', 'Prodigy', 'GEnie'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What internet protocol was documented in RFC 1459?',
    correct_answer: 'IRC',
    incorrect_answers: ['HTTP', 'HTTPS', 'FTP'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What major programming language does Unreal Engine 4 use?',
    correct_answer: 'C++',
    incorrect_answers: ['Assembly', 'C#', 'ECMAScript'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'The acronym &quot;RIP&quot; stands for which of these?',
    correct_answer: 'Routing Information Protocol',
    incorrect_answers: [
      'Runtime Instance Processes',
      'Regular Interval Processes',
      'Routine Inspection Protocol',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What was the name of the first Bulgarian personal computer?',
    correct_answer: 'IMKO-1',
    incorrect_answers: ['Pravetz 82', 'Pravetz 8D', 'IZOT 1030'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'What type of sound chip does the Super Nintendo Entertainment System (SNES) have?',
    correct_answer: 'ADPCM Sampler',
    incorrect_answers: [
      'FM Synthesizer',
      'Programmable Sound Generator (PSG)',
      'PCM Sampler',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who is the founder of Palantir?',
    correct_answer: 'Peter Thiel',
    incorrect_answers: ['Mark Zuckerberg', 'Marc Benioff', 'Jack Dorsey'],
  },
]

// GENERAZIONE TIMER

let timer

const countdown = function (n) {
  let timeLeft = n
  timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer)
    } else {
      document.getElementById('seconds').innerHTML = timeLeft
    }
    timeLeft -= 1
  }, 1000)
}

countdown(60)

// SEZIONE SCORE E SCOPE DEI VARI ELEMENTI

const quizSection = document.getElementById('question-section')
const quizElement = document.getElementById('question')
const buttonsContainer = document.getElementById('buttonsContainer')
const questionCounter = document.getElementById('question-counter')

let currentIndex = 0
let score = 0

const savedScore = localStorage.getItem('score')
if (savedScore !== null) {
  score = parseInt(savedScore) //SI REGISTRA LO SCORE IN LOCALE CON GETITEM
}

// CREAZIONE DOMANDE E ELEMENTI BUTTON

const getQuestion = function () {
  const actualQuestion = questions[currentIndex]
  quizElement.textContent = actualQuestion.question
  buttonsContainer.innerHTML = ''

  if (actualQuestion.type === 'multiple') {
    actualQuestion.incorrect_answers.push(actualQuestion.correct_answer)
    actualQuestion.incorrect_answers.forEach((opt) => {
      const buttons = document.createElement('button')
      buttons.textContent = opt
      buttons.addEventListener('click', () => answerChecking(opt))
      buttonsContainer.appendChild(buttons)
    })
  } else if (actualQuestion.type === 'boolean') {
    const buttonTrue = document.createElement('button')
    buttonTrue.textContent = 'True'
    buttonTrue.addEventListener('click', () => answerChecking('True'))
    buttonsContainer.appendChild(buttonTrue)

    const buttonFalse = document.createElement('button')
    buttonFalse.textContent = 'False'
    buttonFalse.addEventListener('click', () => answerChecking('False'))
    buttonsContainer.appendChild(buttonFalse)
  }
}

// CREAZIONE COUNTER DELLE DOMANDE CHE DINAMICAMENTE CAMBIA IN BASE ALL'INDICE DELLA DOMANDA

const counter = document.getElementById('question-counter')
counter.textContent = 1

// FUNZIONE CHE FA UN CHECK DI TRUTHY OR FALSY SULLA DOMANDA

const answerChecking = function (chosenOption) {
  const actualQuestion = questions[currentIndex]
  if (chosenOption === actualQuestion.correct_answer) {
    score++
  }
  currentIndex++
  counter.textContent = currentIndex + 1
  if (currentIndex < questions.length) {
    getQuestion()
    startAnimation() // DOPO OGNI DOMANDA RIPARE TIL TIMER E L'ANIMAZIONE DEL TIMER
    clearInterval(timer)
    countdown(60)
  } else {
    showResult()
  }
}

getQuestion()

//SI SALVA LO SCORE IN LOCALE CON SET ITEM

const showResult = function () {
  window.open('results.html', '_self')
  localStorage.setItem('score', score)
}

//FUNZIONE CHE RIATTIVA ANIMAZIONE DEL TIIMER
const startAnimation = function () {
  const animationCircle = document.getElementById('animationCircle')
  animationCircle.beginElement()
}
