const themeToggler = document.querySelector("#themeToggler");

let darkMode = localStorage.getItem("dark-mode");

const toggleDarkMode = () => {
    localStorage.setItem("dark-mode", "enabled");
}

const toggleLightMode = () => {
    localStorage.setItem("dark-mode", "disabled");
}

// load dark mode
if (darkMode == "enabled") {
    toggleDarkMode()
}

themeToggler.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        toggleDarkMode()
    } else {
        toggleLightMode()
    }
})

