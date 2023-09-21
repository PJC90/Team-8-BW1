const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What does AD stand for in relation to Windows Operating Systems? ',
    correct_answer: 'Active Directory',
    incorrect_answers: [
      'Alternative Drive',
      'Automated Database',
      'Active Department',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?',
    correct_answer: 'Taiwan',
    incorrect_answers: [
      'United States',
      'Germany',
      'China (People&#039;s Republic of)',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'medium',
    question:
      'To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'On which day did the World Wide Web go online?',
    correct_answer: 'December 20, 1990',
    incorrect_answers: [
      'December 17, 1996',
      'November 12, 1990',
      'November 24, 1995',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?',
    correct_answer: 'print(&quot;Hello World&quot;)',
    incorrect_answers: [
      'console.log(&quot;Hello World&quot;)',
      'echo &quot;Hello World&quot;',
      'printf(&quot;Hello World&quot;)',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?',
    correct_answer: 'center',
    incorrect_answers: ['static', 'absolute', 'relative'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is known as &quot;the brain&quot; of the Computer?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: ['Motherboard', 'Graphics Processing Unit', 'Keyboard'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What does the term GPU stand for?',
    correct_answer: 'Graphics Processing Unit',
    incorrect_answers: [
      'Gaming Processor Unit',
      'Graphite Producing Unit',
      'Graphical Proprietary Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Which of these people was NOT a founder of Apple Inc?',
    correct_answer: 'Jonathan Ive',
    incorrect_answers: ['Steve Jobs', 'Ronald Wayne', 'Steve Wozniak'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'The teapot often seen in many 3D modeling applications is called what?',
    correct_answer: 'Utah Teapot',
    incorrect_answers: ['Pixar Teapot', '3D Teapot', 'Tennessee Teapot'],
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
