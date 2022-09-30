const header = document.querySelector(".header");
const userTypeSelection = document.querySelector("#userTypeSelection")

window.addEventListener("scroll", () => {
    if (window.document.documentElement.scrollTop >= 50) {
        header.classList.add("navbar-scroll")
    } else {
        header.classList.remove("navbar-scroll")
    }
})

