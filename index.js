const awsome = document.querySelector('[data-element="awsome"]')
const intrinsicSwitch = document.querySelector("#intrinsic_switch")

intrinsicSwitch.addEventListener("click", () => {
  awsome.setAttribute(
    "data-sizing",
    intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
  )
})
const box = document.querySelector('[data-element="box"]')
const borderBox = document.querySelector("#contectBox_borderBox")
borderBox.addEventListener("change", () => {
  box.setAttribute(
    "data-sizing",
    borderBox.checked ? "border_box" : "content_box"
  )
})

// let count = 0
// ;(function imm() {
//   if (count === 0) {
//     let count = 1
//     console.log(count)
//   }
//   console.log(count)
// })()
// console.log(count)
