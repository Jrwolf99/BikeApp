var express = require("express");
var router = express.Router();

const productController = require("../controllers/product");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
