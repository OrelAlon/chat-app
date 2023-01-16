const mongoose = require("mongoose");

const codeblockSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("codeblockSchema");
