const knex = require("./knex");

const createProduct = (product) => {
  return knex("product").insert(product);
};

const getAllProducts = () => {
  return knex("product").select("*");
};

module.exports = {
  createProduct,
  getAllProducts,
};
