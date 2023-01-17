const express = require("express");
const router = express.Router();
const {
  getCodeblock,
  getCodeblocks,
  createCodeblock,
  deleteCodeblock,
} = require("./codeblock.controller");

router.get("/", getCodeblock);

router.get("/codeblockes", getCodeblocks);

router.post("/", createCodeblock);

router.delete("/:id", deleteCodeblock);

module.exports = router;
