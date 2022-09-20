const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    if (!(navbarMenu.classList.contains("active"))) {
        navbarMenu.classList.add("active");
    } else {
        navbarMenu.classList.remove("active");
    }
})