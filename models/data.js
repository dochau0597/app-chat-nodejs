const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  phone: Number,
  email: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
