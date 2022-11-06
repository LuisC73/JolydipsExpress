window.addEventListener("DOMContentLoaded", () => {
  /* Inicio Menu responsive */
  const menuOpen = document.getElementById("menuOpen"),
    menuClose = document.getElementById("menuClose"),
    navbar = document.querySelector(".navbar");

  menuOpen.addEventListener("click", () => {
    navbar.classList.add("navbar--active");
    console.log(navbar);
  });

  menuClose.addEventListener("click", () => {
    navbar.classList.remove("navbar--active");
  });
  /* Fin Menu responsive */

  /* Inicio Validaciones registro clientes */
  const formCustomer = document.getElementById("formCustomer"),
    errors = document.getElementById("errors"),
    inputsForm = document.querySelectorAll(".formRegister__input");

  const expressions = {
    text: /^[A-Za-z]{0,20}$/i,
    number: /^[0-9]{0,10}$/i,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    address: / ^ [a-zA-Z] + [a-zA-Z] + $ /,
  };

  const validateField = (expression, field, data) => {
    if (!expression.test(field.value)) {
      field.classList.add("formRegister__input--error");
      errors.textContent = `${data} Equivocado`;
    } else {
      field.classList.remove("formRegister__input--error");
      errors.textContent = "";
    }
  };

  const validateCustormer = (e) => {
    switch (e.target.name) {
      case "name":
        validateField(expressions.text, e.target, "Nombre");
        break;
      case "last_name":
        validateField(expressions.text, e.target, "Apellido");
        break;
      case "document":
        validateField(expressions.number, e.target, "Documento");
        break;
      case "email":
        validateField(expressions.email, e.target, "Correo");
        break;
      case "address":
        validateField(expressions.address, e.target, "Dirección");
        break;
      case "phone":
        validateField(expressions.number, e.target, "Telefono");
        break;
    }
  };

  inputsForm.forEach((input) => {
    input.addEventListener("keyup", validateCustormer);
  });

  formCustomer.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  /* Fin Validaciones registro clientes */

  /* Inicio Validaciones registro productos */
  /* Fin Validaciones registro productos */
});
