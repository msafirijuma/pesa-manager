const themeToggler = document.querySelector("#themeToggler");
const themeIcon = document.querySelector("#themeIcon");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
let darkMode = localStorage.getItem("dark-mode");

const headerDarkMode = () => {
    if (header.classList.contains("header")) {
        header.classList.add("header-dark")
    }
}

const footerDarkMode = () => {
    if (footer.classList.contains("footer")) {
        footer.classList.add("footer-dark")
    }
}

const headerLightMode = () => {
    if (header.classList.contains("header-dark")) {
        header.classList.remove("header-dark")
    }
}

const footerLightMode = () => {
    if (footer.classList.contains("footer-dark")) {
        footer.classList.remove("footer-dark")
    }
}

const toggleDarkMode = () => {
    headerDarkMode();
    footerDarkMode();
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("dark-mode", "enabled");
}

const toggleLightMode = () => {
    headerLightMode()
    footerLightMode();
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("dark-mode", "disabled");
}

// load dark mode
if (darkMode == "enabled") {
    toggleDarkMode()
}

themeToggler.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
})

