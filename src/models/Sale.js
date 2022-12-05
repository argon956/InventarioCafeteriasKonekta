/// <reference types="mongoose" />

import mongoose from "mongoose";

const salesSchema = mongoose.Schema(
  {
    prod_name: {
      type: String,
      required: true,
    },
    prod_reference: {
      type: String,
    },
    sold_amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", salesSchema);

export default Sale;
