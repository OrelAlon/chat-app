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
  solution: {
    type: String,
  },
});

module.exports = mongoose.model("Codeblock", codeblockSchema);
