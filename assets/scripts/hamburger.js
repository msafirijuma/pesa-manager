const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".nav-menu");
const textMenu = document.querySelector(".text-menu")
const hamburgerIcon = document.querySelector("#hamburgerIcon");

hamburger.addEventListener("click", () => {
    if (!(navbarMenu.classList.contains("active"))) {
        navbarMenu.classList.add("active");
        hamburgerIcon.classList.replace("fa-hamburger", "fa-times");
        textMenu.innerHTML = "Close";
    } else {
        navbarMenu.classList.remove("active");
        hamburgerIcon.classList.replace("fa-times", "fa-hamburger");
        textMenu.innerHTML = "Menu";
    }
})