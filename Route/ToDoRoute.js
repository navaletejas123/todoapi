const {
  getAllToDo,
  getToDoByID,
  updateToDo,
  creteToDo,
  deleteToDo,
  
} = require("../Controller/ToDoController");
const route = require("express").Router();

route.get("/", getAllToDo);
route.get("/:id", getToDoByID);
route.patch("/:id", updateToDo);
route.delete("/:id", deleteToDo);
route.post("/", creteToDo);

module.exports = route;
