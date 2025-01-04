const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String },
  images: [String],
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
