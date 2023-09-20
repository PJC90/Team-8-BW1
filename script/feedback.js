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

const formButton = document.getElementById("form-button");

formButton.addEventListener("click", function () {
  window.location.href = "https://www.epicode.com/";
});