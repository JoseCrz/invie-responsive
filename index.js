var burgerButton = document.getElementById("burger-button")
var menu = document.getElementById("menu")
var consulta = window.matchMedia("(max-width: 500px)")
consulta.addListener(mediaQuery)


function mediaQuery () {
  if (consulta.matches) {
    console.log("Se cumplió la condición")
    burgerButton.addEventListener("touchstart", toggleMenu)
  } else {
    console.log("No se cumplió la condición")
    burgerButton.removeEventListener("touchstart", toggleMenu)
  }
}

function toggleMenu () {
  menu.classList.toggle("active")
}

mediaQuery()