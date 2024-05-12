const firstName = document.querySelector(".FnameInput");
const lastName = document.querySelector(".LnameInput");
const pwd = document.querySelector(".PassInput");
const Email = document.querySelector(".EmailInput");

const submitBtn = document.querySelector('button[type="submit"]');

const ErrorFirstName = document.getElementById("firstNameError");
const ErrorLastName = document.getElementById("lastNameError");
const ErrorPassword = document.getElementById("passwordError");
const ErrorEMail = document.getElementById("emailError");

const ErrorFirstNameIcon = document.getElementById("fNameErrorIcon");
const ErrorLastNameIcon = document.getElementById("lastNameErrorIcon");
const ErrorPasswordIcon = document.getElementById("PassErrorIcon");
const ErrorEmailIcon = document.getElementById("EmailErrorIcon");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    if (firstName.value.trim() === "") {
        ErrorFirstName.style.display = "block";
        ErrorFirstNameIcon.style.display = "block";
        firstName.classList.add("error-border");
        firstName.setAttribute("placeholder", "");
    } else {
        ErrorFirstName.style.display = "none";
        ErrorFirstNameIcon.style.display = "none";
        firstName.classList.remove("error-border");
    }
    
    if (lastName.value.trim() === "") {
        ErrorLastName.style.display = "block";
        ErrorLastNameIcon.style.display = "block";
        lastName.classList.add("error-border");
        lastName.setAttribute("placeholder", "");
    } else {
        ErrorLastName.style.display = "none";
        ErrorLastNameIcon.style.display = "none";
        lastName.classList.remove("error-border");
    }
    
    if (pwd.value.trim() === "") {
        ErrorPassword.style.display = "block";
        ErrorPasswordIcon.style.display = "block";
        pwd.classList.add("error-border");
        pwd.setAttribute("placeholder", "");
    } else {
        ErrorPassword.style.display = "none";
        ErrorPasswordIcon.style.display = "none";
        pwd.classList.remove("error-border");
    }

    if (!pattern.test(Email.value.trim())) {
        ErrorEmailIcon.style.display = "block";
        ErrorEMail.style.display = "block";
        Email.classList.add("error-border");
        Email.setAttribute("placeholder", "email@example.com");
        Email.classList.add("placeholder-error");
    } else {
        ErrorEmailIcon.style.display = "none";
        ErrorEMail.style.display = "none";
        Email.classList.remove("error-border");
        Email.setAttribute("placeholder", "Email Address");
        Email.classList.remove("placeholder-error");
    }
});
