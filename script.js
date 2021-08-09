const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm(e) {
  e.preventDefault();
  isValid = form.checkValidity();

  if (!isValid) {
    // Style main message for an error
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
}

form.addEventListener("submit");
