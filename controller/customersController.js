import { Customer } from "../models/CustomerModel.js";

const formRegisterCustomer = (req, res) => {
  res.render(`auth/registerCustomer`, {
    nameView: "Registro Cliente",
  });
};

export { formRegisterCustomer };
