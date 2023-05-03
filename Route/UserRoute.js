const {
  getAllUser,updateUser,createUser,login,deleteUser,getUserByID
  } = require("../Controller/UserController");
  const route = require("express").Router();
  
  route.get("/", getAllUser);
  route.get("/:id", getUserByID);
  route.put("/:id", updateUser);
  route.delete("/:id", deleteUser);
  route.post("/", createUser);
  route.post('/login',login)
  
  module.exports = route;
  