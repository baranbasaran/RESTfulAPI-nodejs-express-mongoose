const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter a User Name"],
    unique: true,
  },
  nickName: {
    type: String,
    required: [true, "Please enter a Nick Name"],
  },
  age: {
    type: Number,
    required: [true, "Please enter an Age"],
  },
  country: {
    type: String,
    required: [true, "Please enter a Country"],
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
