const express = require("express");
require("dotenv").config();
const connect = require("./config/db");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "https://chat-app-rqlq.onrender.com/"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/codeblock", require("./codeblock/codeblock.routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

const server = app.listen(port, () => {
  connect(process.env.MONGO_URL);
  console.log(`Server running on port ${port}`);
});

// connect socket
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-changes", (newText) => {
    socket.broadcast.emit("receive-changes", newText);
  });

  console.log(`Number of connected clients: ${io.engine.clientsCount}`);

  socket.on("disconnect", () => {
    console.log(`User disconnect: ${socket.id}`);
  });
});
