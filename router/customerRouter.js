import express from "express";
import {
  createCustomer,
  formRegisterCustomer,
} from "../controller/customersController.js";
import {
  createProduct,
  formRegisterProduct,
} from "../controller/productsController.js";
const customerRoute = express.Router();

customerRoute.get("/registerCustomer", formRegisterCustomer);
customerRoute.post("/registerCustomer", createCustomer);
customerRoute.get("/registerProduct", formRegisterProduct);
customerRoute.post("/registerProduct", createProduct);

export { customerRoute };
