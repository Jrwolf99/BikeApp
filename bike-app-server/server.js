const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var salespersonRouter = require("./routes/salesperson");
var productRouter = require("./routes/product");

app.use("/salesperson", salespersonRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
