const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/codeblock", require("./codeblock/codeblock.routes"));

// app.listen(port, () => console.log(`Server started on port ${port}`));

app.listen(port, () => {
  connect(process.env.MONGO_URL);
  console.log(`Server running on port ${port}`);
});
