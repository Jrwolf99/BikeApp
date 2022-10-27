const model = require("../model/model");

const createCustomer = async (req, res) => {
  const results = await model.createRow("customer", req.body);
  res.status(201).json({ id: results[0] });
};

const getAllCustomers = async (req, res) => {
  const Customers = await model.getAllRows("customer");
  res.status(200).json({ Customers });
};

const deleteCustomer = async (req, res) => {
  await model.deleteRow("customer", "CustomerID", req.params.id);
  res.status(200).json({ success: true });
};

const updateCustomer = async (req, res) => {
  const CustomersID = await model.updateRow(
    "customer",
    "CustomerID",
    req.params.id,
    req.body
  );
  res.status(200).json({ CustomersID });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  deleteCustomer,
  updateCustomer,
};
