function show() {
    const text = document.getElementById("usernameInput").value;
    const outputConsole = document.querySelector(".console-area");
    outputConsole.textContent = text.split("").reverse("").join("");
}