const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  codeId: {
    type: String,
    required: true,
  },
  isFirst: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("AdminUser", adminSchema);
