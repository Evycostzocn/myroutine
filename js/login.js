const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.body;

if (btnSignin) {
  btnSignin.addEventListener('click', () => {
    body.classList.add('sign-in-js');
    body.classList.remove('sign-up-js');
  });
}

if (btnSignup) {
  btnSignup.addEventListener('click', () => {
    body.classList.add('sign-up-js');
    body.classList.remove('sign-in-js');
  });
}