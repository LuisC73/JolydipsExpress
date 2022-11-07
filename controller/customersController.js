import { Customer } from "../models/CustomerModel.js";

const formRegisterCustomer = (req, res) => {
  res.render(`auth/registerCustomer`, {
    nameView: "Registro Cliente",
  });
};

const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  // res.json(customer);
  res.render("templates/customerCreated", {
    nameView: "Cliente Creado",
    msg: "El cliente fue creado correctamente",
  });
};

export { formRegisterCustomer, createCustomer };
