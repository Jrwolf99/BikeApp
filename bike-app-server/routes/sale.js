var express = require("express");
var router = express.Router();

const saleController = require("../controllers/sale");

router.post("/", saleController.createSale);
router.get("/", saleController.getAllSales);
router.patch("/:id", saleController.updateSale);
router.delete("/:id", saleController.deleteSale);

router.get("/organized", saleController.getAllSalesOrganized);

module.exports = router;
