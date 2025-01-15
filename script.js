const userForm = document.querySelector("#sign-up-form");

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
