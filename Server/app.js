const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const ConnectDB = require("./database/database");

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

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});
