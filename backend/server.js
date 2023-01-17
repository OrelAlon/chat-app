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
app.use("/api/admin", require("./admin/admin.routes"));

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
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (codeblockId) => {
    socket.join(codeblockId);
  });

  socket.on("send-changes", ({ codeblockId, newText }) => {
    socket.to(codeblockId).emit("receive-changes", newText);
  });

  const count = io.engine.clientsCount;

  console.log(`Number of connected clients: ${count}`);

  socket.on("disconnect", () => {
    console.log(`User disconnect: ${socket.id}`);
  });
});
