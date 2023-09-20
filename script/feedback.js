const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
]

// const procedi = document.getElementById('proceed')
// const spuntaCheck = document.getElementById('check')

// procedi.addEventListener('click', function () {
//   if (spuntaCheck.checked) {
//     window.location.href = 'pagina2.html'
//   } else {
//     alert('You must accept before proceeding')
//   }
// })

// const accendi = document.querySelectorAll('.star')
// // itera nella nodeList con un for
// for (let i = 0; i < accendi.length; i++) {
//   accendi[i].addEventListener('click', function () {
//     // quando clicchi una stella esegui una funzione con un for che le illumini tutte fino al numero selezionato
//     for (let s = 0; s <= i; s++) {
//       accendi[s].style.mixBlendMode = 'normal'
//     }
//   })
// }

const accendi = document.querySelectorAll('.star')
let selectedStars = 0

for (let i = 0; i < accendi.length; i++) {
  accendi[i].addEventListener('click', function () {
    selectedStars = i + 1

    for (let s = 0; s < accendi.length; s++) {
      if (s <= i) {
        accendi[s].style.mixBlendMode = 'normal'
      } else {
        accendi[s].style.mixBlendMode = 'darken'
      }
    }
  })
}

const form = document.querySelector('#inviaForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const report = form.querySelector('.box')
  if (report.value.trim() === '') {
    // trim() verifica che non è una stringa vuota
    alert('Devi riempire il campo di testo')
  } else {
    form.submit()
  }
})
