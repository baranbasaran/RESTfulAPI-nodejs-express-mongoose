const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

//DB Config
var databaseName = "dbName"; //Enter your database settings
var userName = "userName";
var password = passs;

// DB CONNECTION
mongoose
  .connect(
    "mongodb+srv://" +
      userName +
      ":" +
      password +
      "@nikatekc0.092by.mongodb.net/" +
      databaseName +
      "?retryWrites=true&w=majority",
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then((result) => {
    console.log("You made a successful connection.");
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});
