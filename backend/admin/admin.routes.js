const express = require("express");
const router = express.Router();
const { getAdmin, createAdmin, deleteAdmin } = require("./admin.controller");

router.get("/", getAdmin);

router.post("/", createAdmin);

router.delete("/", deleteAdmin);

module.exports = router;
