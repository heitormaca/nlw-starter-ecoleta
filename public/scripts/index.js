const buttonSeach = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const exit = document.querySelector("#modal .header a")
buttonSeach.addEventListener("click", () => {
    modal.classList.remove("hide")
})

exit.addEventListener("click", () => {
    modal.classList.add("hide")
})