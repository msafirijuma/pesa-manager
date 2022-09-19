const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.document.documentElement.scrollTop >= 60) {
        header.classList.add("navbar-scroll")
    } else {
        header.classList.remove("navbar-scroll")
    }
})