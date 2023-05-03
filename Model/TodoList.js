const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  taskName: String,
  isDone: { type: Boolean, default: false },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", todoSchema);
