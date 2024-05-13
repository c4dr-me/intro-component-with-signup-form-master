const submitBtn = document.querySelector('button[type="submit"]');
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const pwd = document.getElementById("Password");
    const email = document.getElementById("EmailAddress");

    const ErrorFirstName = document.getElementById("firstNameError");
    const ErrorLastName = document.getElementById("lastNameError");
    const ErrorPassword = document.getElementById("passwordError");
    const ErrorEmail = document.getElementById("emailError");

    const ErrorFirstNameIcon = document.getElementById("fNameErrorIcon");
    const ErrorLastNameIcon = document.getElementById("lastNameErrorIcon");
    const ErrorPasswordIcon = document.getElementById("PassErrorIcon");
    const ErrorEmailIcon = document.getElementById("EmailErrorIcon");

    if (firstName.value.trim() === "") {
        showError(ErrorFirstName, ErrorFirstNameIcon, firstName);
        firstName.setAttribute("placeholder", "");
    } else {
        hideError(ErrorFirstName, ErrorFirstNameIcon, firstName);
    }

    if (lastName.value.trim() === "") {
        showError(ErrorLastName, ErrorLastNameIcon, lastName);
        lastName.setAttribute("placeholder", "");
    } else {
        hideError(ErrorLastName, ErrorLastNameIcon, lastName);

    }

    if (pwd.value.trim() === "") {
        showError(ErrorPassword, ErrorPasswordIcon, pwd);
        pwd.setAttribute("placeholder", "");
    } else {
        hideError(ErrorPassword, ErrorPasswordIcon, pwd);
    }

    if (!pattern.test(email.value.trim())) {
        showError(ErrorEmail, ErrorEmailIcon, email);
        email.setAttribute("placeholder", "email@example.com");
        email.classList.add("placeholder-error");
    } else {
        hideError(ErrorEmail, ErrorEmailIcon, email);
        email.setAttribute("placeholder", "Email Address");
        email.classList.remove("placeholder-error");
    }
});

function showError(errorElem, errorIcon, inputElem) {
    errorElem.style.display = "block";
    errorIcon.style.display = "block";
    inputElem.classList.add("error-border");
    inputElem.setAttribute("aria-invalid", "true");
}

function hideError(errorElem, errorIcon, inputElem) {
    errorElem.style.display = "none";
    errorIcon.style.display = "none";
    inputElem.classList.remove("error-border");
    inputElem.removeAttribute("aria-invalid");
}
