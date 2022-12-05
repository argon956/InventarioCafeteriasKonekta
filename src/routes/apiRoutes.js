import express from "express";
import {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
  getProductMostSales,
  getProductMostStock,
  saveSale,
} from "../controllers/apiController.js";

const api = express.Router();

api.route("/products").get(getProducts).post(saveProduct);
api
  .route("/products/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);
api.route("/sales").get(getProductMostSales).post(saveSale);
api.route("/stats").get(getProductMostStock);

export default api;
