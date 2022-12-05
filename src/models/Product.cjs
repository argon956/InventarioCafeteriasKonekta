/// <reference types="mongoose" />

const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reference: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
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

productsSchema.plugin(AutoIncrement, {
  inc_field: "reference",
});

module.exports = mongoose.model("Product", productsSchema);
