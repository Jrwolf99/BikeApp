const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

var testRouter = require("./routes/testroute");

app.use("/", testRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
