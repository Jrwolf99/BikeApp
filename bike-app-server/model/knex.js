const knex = require("knex");

//knex is now connected to your database to build onto the database.
const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "bikeappdatabase.db",
  },
});

module.exports = connectedKnex;
