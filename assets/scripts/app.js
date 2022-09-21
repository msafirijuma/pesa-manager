const header = document.querySelector(".header");
const userTypeSelection = document.querySelector("#userTypeSelection");

window.addEventListener("scroll", () => {
    if (window.document.documentElement.scrollTop >= 60) {
        header.classList.add("navbar-scroll")
    } else {
        header.classList.remove("navbar-scroll")
    }
})

userTypeSelection.addEventListener("change", (e) => {
    userInput = e.target.value;
    if (userInput === "-1") {
        window.location.href = "../../homepage.html"
    } else if (userInput === "expense") {
        window.location.href = "../../expenditures.html"
    } else {
        window.location.href = "../../revenues.html"
    }
})