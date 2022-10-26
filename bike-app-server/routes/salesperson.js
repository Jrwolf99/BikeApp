var express = require("express");
var router = express.Router();

const salespersonController = require("../controllers/salesperson");

router.post("/", salespersonController.createSalesperson);
router.get("/", salespersonController.getAllSalespersons);
router.patch("/:id", salespersonController.updateSalesperson);
router.delete("/:id", salespersonController.deleteSalesperson);

module.exports = router;
