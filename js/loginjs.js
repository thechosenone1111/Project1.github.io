// This script adds basic validation to check if both fields are filled

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("main button");

    loginButton.addEventListener("click", function (event) {
        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        if (username === "" || password === "") {
            alert("Both Username and Password are required!");
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Login successful!");
        }
    });
});
