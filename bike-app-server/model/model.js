const knex = require("./knex");

const createRow = (tableName, rowValues) => {
  return knex(tableName).insert(rowValues);
};

const getAllRows = (tableName) => {
  return knex(tableName).select("*");
};

const deleteRow = (tableName, primaryKeyTitle, rowID) => {
  return knex(tableName).where(primaryKeyTitle, rowID).del();
};

const updateRow = (tableName, primaryKeyTitle, rowID, rowValues) => {
  return knex(tableName).where(primaryKeyTitle, rowID).update(rowValues);
};

//normal SQL:
// SELECT
// product_name, customer.first_name as "customer_first_name", customer.last_name as "customer_last_name",
// sale_date, sale_price, salesperson.first_name as "salesperson_first_name", salesperson.last_name as "salesperson_first_name",
// sale_price*commission_percentage as "commission"
// FROM sale
// JOIN product
// ON sale.ProductID = product.ProductID
// JOIN customer
// ON sale.CustomerID = customer.CustomerID
// JOIN salesperson
// ON sale.SalespersonID = salesperson.SalespersonID;

const getAllSalesOrganized = (tableName) => {
  return knex(tableName)
    .join("product", "sale.ProductID", "product.ProductID")
    .join("customer", "sale.CustomerID", "customer.CustomerID")
    .join("salesperson", "sale.SalespersonID", "salesperson.SalespersonID")
    .select(
      "SaleID",
      "product_name",
      "customer.first_name as customer_first_name",
      "customer.last_name as customer_last_name",
      "sale_date",
      "sale_price",
      "salesperson.first_name as salesperson_first_name",
      "salesperson.last_name as salesperson_last_name",
      "commission_percentage",
      knex.raw("sale_price*commission_percentage as Commission")
    );
};

module.exports = {
  createRow,
  getAllRows,
  deleteRow,
  updateRow,
  getAllSalesOrganized,
};
