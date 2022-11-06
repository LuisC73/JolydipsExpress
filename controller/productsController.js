import { Product } from "../models/ProductModel.js";

const formRegisterProduct = (req, res) => {
  res.render(`auth/registerProduct`, {
    nameView: "Registro Producto",
  });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
  console.log(req.body);
  console.log(`Producto guardado correctamente`);
};

export { formRegisterProduct, createProduct };
