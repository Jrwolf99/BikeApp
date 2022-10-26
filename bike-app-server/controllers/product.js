const model = require("../model/model");

const createProduct = async (req, res) => {
  const results = await model.createRow("product", req.body);
  res.status(201).json({ id: results[0] });
};

const getAllProducts = async (req, res) => {
  const products = await model.getAllRows("product");
  res.status(200).json({ products });
};

const deleteProduct = async (req, res) => {
  await model.deleteRow("product", "ProductID", req.params.id);
  res.status(200).json({ success: true });
};

const updateProduct = async (req, res) => {
  const salespersonsID = await model.updateRow(
    "product",
    "ProductID",
    req.params.id,
    req.body
  );
  res.status(200).json({ salespersonsID });
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
