import { Customer } from "../models/CustomerModel.js";

const formRegisterCustomer = (req, res) => {
  res.render(`auth/registerCustomer`, {
    nameView: "Registro Cliente",
  });
};

const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
  console.log(req.body);
  console.log(`Cliente guardado correctamente`);
};

export { formRegisterCustomer, createCustomer };
