/// <reference types="mongoose" />

import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    createdDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productsSchema);

export default Product;
