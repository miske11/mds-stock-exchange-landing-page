const userForm = document.querySelector("#sign-up-form");

//listener that checks if all form elements are filled or valid before proceeding

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll("input[required]");

  let allValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      allValid = false;
    }
  });

  const textArea = form.querySelector('textarea');
  if (!textArea.checkValidity()) {
    allValid = false;
  }

  if (allValid) {
    alert("You have successfuly sent the message.");
    clearInputs(form);
  }
});

function clearInputs(form) {
  const inputs = form.querySelectorAll("input[required]");
  inputs.forEach((input) => {
    input.value = "";
  });
  const textArea = form.querySelector("textarea");
  textArea.value = "";
}

// burger menu logic 

const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//listener that closes the burger menu after the link inside it is clicked

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});