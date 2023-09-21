// DEFINIZIONE DELLA FUNZIONE CHE ACCENDE LE STELLINE NELLA PAG.FEEDBACK

const accendi = document.querySelectorAll(".star");
let selectedStars = 0;

for (let i = 0; i < accendi.length; i++) {
  accendi[i].addEventListener("click", function () {
    selectedStars = i + 1;

    for (let s = 0; s < accendi.length; s++) {
      if (s <= i) {
        accendi[s].style.mixBlendMode = "normal";
      } else {
        accendi[s].style.mixBlendMode = "darken";
      }
    }
  });
}

// AGGIUNTO LINK ESTERNO AL BOTTONE FINALE

const form = document.querySelector("#inviaForm");
const formButton = document.getElementById("form-button");

formButton.addEventListener("click", function () {
  const report = form.querySelector(".box");
  if (report.value.trim() === "") {
    // trim() verifica che non è una stringa vuota
    alert("Devi riempire il campo di testo");
  } else {
    window.location.href = "https://www.epicode.com/";
  }
});
