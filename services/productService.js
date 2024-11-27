const productModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create a new produc
exports.addProduct = asyncHandler(async (req, res) => {
  const filePath = req.file.path;

  const result = await cloudinary.uploader.upload(filePath, {
    folder: "uploads",
  });

  fs.unlinkSync(filePath);

  const { name, price, description } = req.body;
  const image = result.url;
  const product = await productModel.create({
    name,
    price,
    description,
    image,
  });
  res.status(201).json({ data: product });
});

// Get All Products
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({ data: products });
});

// Get specific Product
exports.getSpecificProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  if (!product) {
    return next(new ApiError("Product not found", 404));
  }

  res.status(200).json({ data: product });
});
