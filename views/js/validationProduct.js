window.addEventListener("DOMContentLoaded", () => {
  /* Inicio Validaciones registro productos */

  const formProduct = document.getElementById("formProduct"),
    errorsProduct = document.getElementById("errors"),
    inputsFormProducts = document.querySelectorAll(".formRegister__input");

  const expressionsProducts = {
    text: /^[A-Za-z\s]{0,20}$/i,
    number: /^[0-9]{2,10}$/i,
    reference: /^[A-Za-z\s]{2}[-]{1}[0-9]{3,4}/i,
  };

  const fieldsProducts = {
    nombre: false,
    precio: false,
    referencia: false,
    cantidad: false,
    descripcion: false,
  };

  const validateFieldProducts = (expression, field, data) => {
    if (!expression.test(field.value)) {
      field.classList.add("formRegister__input--error");
      errorsProduct.textContent = `El campo ${data} es incorrecto`;
      fieldsProducts[data] = false;
    } else {
      field.classList.remove("formRegister__input--error");
      errorsProduct.textContent = "";
      fieldsProducts[data] = true;
    }
  };

  const validateFormProducts = (e) => {
    switch (e.target.name) {
      case "name":
        validateFieldProducts(expressionsProducts.text, e.target, "nombre");
        break;
      case "price":
        validateFieldProducts(expressionsProducts.number, e.target, "precio");
        break;
      case "reference":
        validateFieldProducts(expressionsProducts.reference,e.target,"referencia");
        break;
      case "amount":
        validateFieldProducts(expressionsProducts.number, e.target, "cantidad");
        break;
      case "description":
        validateFieldProducts(expressionsProducts.text,e.target,"descripcion"
        );
        break;
    }
  };

  inputsFormProducts.forEach((input) => {
    input.addEventListener("keyup", validateFormProducts);
    input.addEventListener("blur", validateFormProducts);
  });

  formProduct.addEventListener("submit", (e) => {
    for (const i in fieldsProducts) {
      if (!fieldsProducts[i]) {
        e.preventDefault();
        inputsFormProducts.forEach((input) =>
          input.classList.contains("formRegister__input--error"),
          errors.textContent = "El Formulario tiene un Error!!"
        );
        errors.textContent = "El Formulario no esta completado!!";
      }
    }
  });

  /* Fin Validaciones registro productos */
});
