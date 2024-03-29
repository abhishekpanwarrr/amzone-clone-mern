import express from "express";
import Product from "../models/Products.js";
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    // Extract product data from the request body
    const { title, description, price, category, imageUrl, extraDetails } =
      req.body;

    // Create a new product instance using the Product model
    const newProduct = new Product({
      name: title,
      description: description,
      price: price,
      category: category,
      imageUrl: imageUrl,
      extraDetails: extraDetails,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Respond with the saved product data
    res
      .status(201)
      .json({ status: 201, msg: "Product added successfully", savedProduct });
  } catch (error) {
    console.log("Error>>>>", error);
    // Handle errors
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({ msg: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return res.status(404).json({ msg: "No products found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
