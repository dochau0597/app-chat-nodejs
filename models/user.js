const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserLoginSchema = new Schema({
  username: String,
  password: String,
});

const UserLogin = mongoose.model("UserLogin", UserLoginSchema);
module.exports = UserLogin;
