userTypeSelection.addEventListener("change", () => {
    let userInput = userTypeSelection.value;
    if (userInput === "-1") {
        window.location.href = "../../homepage.html"
    } else if (userInput === "expense") {
        window.location.href = "../../expenditures.html"
    } else {
        window.location.href = "../../revenues.html"
    }
})