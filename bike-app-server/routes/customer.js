var express = require("express");
var router = express.Router();

const customerController = require("../controllers/customer");

router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.patch("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
