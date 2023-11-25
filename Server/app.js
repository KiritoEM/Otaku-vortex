const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const ConnectDB = require("./database/database");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//connexion with mongoDB
ConnectDB();

// App middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// App routes
app.use("/email", require("./routes/email.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/blog", require("./routes/blog.routes"));
app.use("/user", require("./routes/user.routes"));

io.on("connection", (socket) => {
  console.log("Client connecté: " + socket.id);

  socket.on("message", (data) => {
    console.log("Message reçu du client:", data);

    io.emit("message", { message: "depuis le serveur" });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: " + socket.id);
  });
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});
