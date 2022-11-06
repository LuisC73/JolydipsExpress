import { Product } from "../models/ProductModel.js";

const formRegisterProduct = (req, res) => {
  res.render(`auth/registerProduct`, {
    nameView: "Registro Producto",
  });
};

export { formRegisterProduct };
