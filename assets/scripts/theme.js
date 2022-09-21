const themeToggler = document.querySelector("#themeToggler");
const themeIcon = document.querySelector("#themeIcon");
let darkMode = localStorage.getItem("dark-mode");

const toggleDarkMode = () => {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("dark-mode", "enabled");
}

const toggleLightMode = () => {
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

