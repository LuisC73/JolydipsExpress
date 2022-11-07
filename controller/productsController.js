import { Product } from "../models/ProductModel.js";

const formRegisterProduct = (req, res) => {
  res.render(`auth/registerProduct`, {
    nameView: "Registro Producto",
  });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  //res.json(product);
  res.render("templates/productCreated", {
    nameView: "Producto Creado",
    msg: "El Producto se guardo Correctamente",
  });
};

export { formRegisterProduct, createProduct };
