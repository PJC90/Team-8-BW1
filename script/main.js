const form = document.getElementById('checkbox')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  window.open('main-difficulty.html', '_self')
})

// carica le pagine html in base alla difficoltà selezionata
function caricaQuiz(html) {
  window.location.href = html
}
