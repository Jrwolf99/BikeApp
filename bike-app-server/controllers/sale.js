const model = require("../model/model");

const createSale = async (req, res) => {
  const results = await model.createRow("sale", req.body);
  res.status(201).json({ id: results[0] });
};

const getAllSales = async (req, res) => {
  const Sales = await model.getAllRows("sale");
  res.status(200).json({ Sales });
};

const getAllSalesOrganized = async (req, res) => {
  const Sales = await model.getAllSalesOrganized("sale");
  res.status(200).json({ Sales });
};

const deleteSale = async (req, res) => {
  await model.deleteRow("sale", "SaleID", req.params.id);
  res.status(200).json({ success: true });
};

const updateSale = async (req, res) => {
  const SaleID = await model.updateRow(
    "sale",
    "SaleID",
    req.params.id,
    req.body
  );
  res.status(200).json({ SaleID });
};

module.exports = {
  createSale,
  getAllSales,
  deleteSale,
  updateSale,
  getAllSalesOrganized,
};
