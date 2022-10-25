var express = require("express");
var router = express.Router();

const fs = require("fs");

/* GET test */
router.get("/", function (req, res, next) {
  let rawdata = fs.readFileSync("model/test.json");
  let data = JSON.parse(rawdata);
  res.send(data);
});

module.exports = router;
