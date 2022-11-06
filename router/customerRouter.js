import express from "express";
import { formRegisterCustomer } from "../controller/customersController.js";
import { formRegisterProduct } from "../controller/productsController.js";
const customerRoute = express.Router();

customerRoute.get("/registerCustomer", formRegisterCustomer);
customerRoute.get("/registerProduct", formRegisterProduct);

export { customerRoute };
