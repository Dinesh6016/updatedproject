const express = require("express");
const {
  addTransection,
  getAllTransection,
} = require("../controllers/transactionCtrl");

const router = express.Router();

// Add transaction
router.post("/add-transection", addTransection);

// Get all transactions
router.post("/get-transection", getAllTransection);

module.exports = router;
