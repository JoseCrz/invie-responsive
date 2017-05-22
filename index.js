var burgerButton = document.getElementById("burger-button")
var menu = document.getElementById("menu")

burgerButton.addEventListener("touchstart", function () {
  menu.classList.toggle("active")
})