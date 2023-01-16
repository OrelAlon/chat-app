const express = require("express");
const router = express.Router();
const {
  getCodeblocks,
  createCodeblock,
  deleteCodeblock,
} = require("./codeblock.controller");

router.route("/").get(getCodeblocks).post(createCodeblock);

router.delete("/:id", deleteCodeblock);

module.exports = router;
