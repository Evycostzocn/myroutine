// =============================== //
// ANIMAÇÃO ENTRE LOGIN / CADASTRO //
// =============================== //

// SELECIONA OS BOTÕES PELO ID
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");

// SELECIONA O BODY INTEIRO, USADO PARA TROCAR CLASSES
const body = document.body;

// ao clicar em "Entrar"
if (btnSignin) {
  btnSignin.addEventListener('click', () => {
    // adiciona a classe que mostra o login
    body.classList.add('sign-in-js');
    // remove a classe de cadastro
    body.classList.remove('sign-up-js');
  });
}

// ao cliar em "Cadastre-se"
if (btnSignup) {
  btnSignup.addEventListener('click', () => {
    // adiciona a classe que mostra o cadastro
    body.classList.add('sign-up-js');
    // remove a classe de Login
    body.classList.remove('sign-in-js');
  });
}

// ====================== //
// FORMULÁRIO DE CADASTRO //
// ====================== //

const registerForm = document.querySelector("#registerForm");

// referências de Inputs com ID 
const nameInput = document.querySelector("#registerName");
const emailInput = document.querySelector("#registerEmail");
const passwordInput = document.querySelector("#registerPassword");

if (registerForm) {

  registerForm.addEventListener("submit", function (event) {
    // impede o navegador de recarregar a página
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(name, email, password);

    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return; // para tudo aqui
    }

    // PRIMEIRO CONTATO DO LOCALSTORAGE
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name: name,
      email: email,
      password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastro realizado com sucesso");

    registerForm.reset();
  });
}
