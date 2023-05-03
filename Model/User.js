const mongoose = require("mongoose");

const userSchem = mongoose.Schema({
  Name: String,
  Email: { type: String,required:true },
  Password:{ type: String,required:true }
});

module.exports = mongoose.model("user", userSchem);
