const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.post("/save-products", async (req, res) => {
  try {
    const { products } = req.body;
    if (!products || products.length === 0) {
      return res.status(400).json({ error: "No products provided" });
    }

    const savedProducts = await Product.insertMany(products);
    res.status(200).json(savedProducts);
  } catch (error) {
    console.error("Error saving products:", error);
    res
      .status(500)
      .json({ error: "Failed to save products", details: error.message });
  }
});

router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ error: "Error fetching products", details: error.message });
  }
});

module.exports = router;
