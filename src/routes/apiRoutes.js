import express from "express";
import { updateProduct, sellProduct } from "../controllers/apiController.js";

const api = express.Router();

api.route("/products:id").post(updateProduct);
api.route("/sales:id").post(sellProduct);

export default api;
