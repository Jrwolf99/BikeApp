const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var salespersonRouter = require("./routes/salesperson");
var productRouter = require("./routes/product");
var customerRouter = require("./routes/customer");
var saleRouter = require("./routes/sale");

app.use("/salesperson", salespersonRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/sale", saleRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
