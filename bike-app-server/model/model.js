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

module.exports = {
  createRow,
  getAllRows,
  deleteRow,
  updateRow,
};
