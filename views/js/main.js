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
    text: /^[A-Za-z\s]{0,20}$/i,
    number: /^[0-9]{10}$/i,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    address: /\d+\w+\s\w+\s\w+/,
  };

  const fields = {
    nombre: false,
    apellido: false,
    documento: false,
    correo: false,
    direccion: false,
    telefono: false,
  };

  const validateField = (expression, field, data) => {
    if (!expression.test(field.value)) {
      field.classList.add("formRegister__input--error");
      errors.textContent = `El campo ${data} es incorrecto`;
      fields[data] = false;
    } else {
      field.classList.remove("formRegister__input--error");
      errors.textContent = "";
      fields[data] = true;
    }
  };

  const validateCustormer = (e) => {
    switch (e.target.name) {
      case "name":
        validateField(expressions.text, e.target, "nombre");
        break;
      case "last_name":
        validateField(expressions.text, e.target, "apellido");
        break;
      case "document":
        validateField(expressions.number, e.target, "documento");
        break;
      case "email":
        validateField(expressions.email, e.target, "correo");
        break;
      case "address":
        validateField(expressions.address, e.target, "direccion");
        break;
      case "phone":
        validateField(expressions.number, e.target, "telefono");
        break;
    }
  };

  inputsForm.forEach((input) => {
    input.addEventListener("keyup", validateCustormer);
    input.addEventListener("blur", validateCustormer);
  });

  formCustomer.addEventListener("submit", (e) => {
    if (
      !fields.nombre &&
      !fields.apellido &&
      !fields.documento &&
      !fields.correo &&
      !fields.direccion &&
      !fields.telefono
    ) {
      e.preventDefault();
      inputsForm.forEach((input) =>
        input.classList.toggle("formRegister__input--error")
      );
      errors.textContent = "El Formulario no esta completado!!";
    }
  });

  /* Fin Validaciones registro clientes */

  /* Inicio Validaciones registro productos */

  /* Fin Validaciones registro productos */
});
