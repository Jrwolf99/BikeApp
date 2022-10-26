const knex = require("./knex");

const createSalesperson = (salesperson) => {
  return knex("salesperson").insert(salesperson);
};

const getAllSalespersons = () => {
  return knex("salesperson").select("*");
};

module.exports = {
  createSalesperson,
  getAllSalespersons,
};
