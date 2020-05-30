const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/data");
const UserLogin = require("./models/user");

const app = new express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

mongoose.connect("mongodb://localhost/datauser", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log("App running on port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  res.render("user");
});

app.post("/create/user", (req, res) => {
  User.create(req.body, (err, user) => {
    res.redirect("/home");
    console.log("da them vao data");
  });
});

app.get("/login/user", (req, res) => {
  res.render("login");
});
