const model = require("../model/salesperson");

const createSalesperson = async (req, res) => {
  const results = await model.createSalesperson(req.body);
  res.status(201).json({ id: results[0] });
};

const getAllSalespersons = async (req, res) => {
  const salespersons = await model.getAllSalespersons();
  res.status(200).json({ salespersons });
};

module.exports = { createSalesperson, getAllSalespersons };
