const model = require("../model/product");

const createProduct = async (req, res) => {
  const results = await model.createProduct(req.body);
  res.status(201).json({ id: results[0] });
};

const getAllProducts = async (req, res) => {
  const products = await model.getAllProducts();
  res.status(200).json({ products });
};

module.exports = { createProduct, getAllProducts };
