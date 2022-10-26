const model = require("../model/model");

const createSalesperson = async (req, res) => {
  const results = await model.createRow("salesperson", req.body);
  res.status(201).json({ id: results[0] });
};

const getAllSalespersons = async (req, res) => {
  const salespersons = await model.getAllRows("salesperson");
  res.status(200).json({ salespersons });
};

const deleteSalesperson = async (req, res) => {
  await model.deleteRow("salesperson", "SalespersonID", req.params.id);
  res.status(200).json({ success: true });
};

const updateSalesperson = async (req, res) => {
  const salespersonsID = await model.updateRow(
    "salesperson",
    "SalespersonID",
    req.params.id,
    req.body
  );
  res.status(200).json({ salespersonsID });
};

module.exports = {
  createSalesperson,
  getAllSalespersons,
  deleteSalesperson,
  updateSalesperson,
};
