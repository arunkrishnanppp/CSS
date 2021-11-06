const openButton = document.querySelector("#openbutton")
const sideBar = document.querySelector("#navBar")
const header = document.querySelector("#header")
const closebutton = document.querySelector("#navbarButton")

let overlay = document.querySelector(".overlay")
console.log(openButton)
// let state = false
openButton.addEventListener("click", () => {
  console.log("clicked")
  overlay.classList.remove("hidden")
  sideBar.classList.remove("area_hidden")
  header.classList.add("header_hide")
})

closebutton.addEventListener("click", () => {
  sideBar.classList.add("area_hidden")
  overlay.classList.add("hidden")
  header.classList.remove("header_hide")
})
