const express = require("express");
const {
  addProduct,
  getAllProducts,
  getSpecificProduct,
} = require("../services/productService");
const { uploadImage } = require("../config/multer");

const router = express.Router();

router.post("/products", uploadImage, addProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getSpecificProduct);

module.exports = router;
