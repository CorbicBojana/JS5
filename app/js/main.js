var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

// Show error message
function showError(input, message) {
  var formControl = input.parentElement;
  formControl.classList.add("error");
  var small = formControl.querySelector("small");
  small.innerText = message;
  email.classList.add("input-email");
  email.placeholder = "email@example/com"
}

// Hide error message
function showSucces(input) {
  var formControl = input.parentElement;
  formControl.classList.remove("error");
  var small = formControl.querySelector("small");
  small.innerText = ""
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.map(function(input) {
    if (input.value.trim() === "") {
      showError(input, input.name + " cannot be empty");
    } else {
      showSucces(input);
    }
  });
}

// Check email format
function checkEmail(input) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Looks like this is not an email");
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
  checkEmail(email);
});
