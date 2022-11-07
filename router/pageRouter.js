import express from "express";
import {
  createCustomer,
  formRegisterCustomer,
} from "../controller/customersController.js";
import {
  createProduct,
  formRegisterProduct,
} from "../controller/productsController.js";
const pageRoute = express.Router();

pageRoute.get("/registerCustomer", formRegisterCustomer);
pageRoute.post("/registerCustomer", createCustomer);
pageRoute.get("/registerProduct", formRegisterProduct);
pageRoute.post("/registerProduct", createProduct);

export { pageRoute };
