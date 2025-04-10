function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let valid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}
