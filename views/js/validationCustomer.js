window.addEventListener("DOMContentLoaded", () => {
  /* Inicio Validaciones registro clientes */
  const formCustomer = document.getElementById("formCustomer"),
    errors = document.getElementById("errors"),
    inputsForm = document.querySelectorAll(".formRegister__input");

  const expressionsCustomer = {
    text: /^[A-Za-z\s]{1,25}$/i,
    number: /^[0-9]{10}$/i,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    address:/^([A-Za-z\s]{1,17}\s?)\d{0,3}\s?[A-Za-z*\s]{0,3}\s{1}[.-_+\#\s*]?[0-9]{1,5}\s?[A-Za-z\s]{0,3}\-\s{0,1}[0-9]{1,4}$/,
  };

  const fieldsCustomer = {
    nombre: false,
    apellido: false,
    documento: false,
    correo: false,
    direccion: false,
    telefono: false,
  };

  const validateFieldCustomer = (expression, field, data) => {
    if (!expression.test(field.value)) {
      field.classList.add("formRegister__input--error");
      errors.textContent = `El campo ${data} es incorrecto`;
      fieldsCustomer[data] = false;
    } else {
      field.classList.remove("formRegister__input--error");
      errors.textContent = "";
      fieldsCustomer[data] = true;
    }
  };

  const validateFormCustormer = (e) => {
    switch (e.target.name) {
      case "name":
        validateFieldCustomer(expressionsCustomer.text, e.target, "nombre");
        break;
      case "last_name":
        validateFieldCustomer(expressionsCustomer.text, e.target, "apellido");
        break;
      case "document":
        validateFieldCustomer(expressionsCustomer.number,e.target,"documento");
        break;
      case "email":
        validateFieldCustomer(expressionsCustomer.email, e.target, "correo");
        break;
      case "address":
        validateFieldCustomer(expressionsCustomer.address,e.target,"direccion");
        break;
      case "phone":
        validateFieldCustomer(expressionsCustomer.number, e.target, "telefono");
        break;
    }
  };

  inputsForm.forEach((input) => {
    input.addEventListener("keyup", validateFormCustormer);
    input.addEventListener("blur", validateFormCustormer);
  });

  formCustomer.addEventListener("submit", (e) => {
    for (const i in fieldsCustomer) {
      if (!fieldsCustomer[i]) {
        e.preventDefault();
        inputsForm.forEach((input) =>
          input.classList.contains("formRegister__input--error"),
          errors.textContent = "El Formulario tiene un error!!!"
        );
        errors.textContent = "El Formulario no esta completado!!";
      }
    }
  });

  /* Fin Validaciones registro clientes */
});
