var express = require("express");
var router = express.Router();

const productController = require("../controllers/product");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
