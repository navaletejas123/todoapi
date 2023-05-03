const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const TodoRoute = require("./Route/ToDoRoute");
const UserRoute = require('./Route/UserRoute')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hii");
});

app.use("/api/todo", TodoRoute);
app.use('/api/user',UserRoute);

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected....!!!");
  }
);

app.listen(process.env.PORT);
