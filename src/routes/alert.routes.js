const express = require("express");
const {
  createAlert,
  getAllAlert,
  deleteAlert,
} = require("../controllers/alert.conroller");
const router = express.Router();
const Authenticate = require("../middlewares/auth.middleware");

router.post("/", Authenticate, createAlert);
router.get("/", Authenticate, getAllAlert);
router.delete("/:id", Authenticate, deleteAlert);

module.exports = router;
