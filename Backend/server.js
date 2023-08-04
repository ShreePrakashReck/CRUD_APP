const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/database");
const dotenv = require("dotenv");
const taskRouter = require("../Backend/router/taskRouters");
const cors = require("cors");

dotenv.config("./.env");
const app = express();
//middleware
//cookies parse middleware
app.use(cookieParser());
//bodyparser middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1", taskRouter);
app.use("/api/v1", (req, res) => {
  res.send("Hello");
});

//default Route API
app.get("/default", (req, res) => {
  res.send("You have to created successfully default route");
});

//dbconnection
dbConnect();
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(
      express.static(
        path.resolve(__dirname, "internship", "build", "index.html")
      )
    );
    res.sendFile(path.resolve(__dirname, "internship", "build", "index.html"));
  });
}

//listen server
app.listen(PORT, (req, res) => {
  console.log(`App is listening on ${PORT}`);
});
