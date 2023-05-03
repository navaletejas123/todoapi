const ToDo = require("../Model/TodoList");

exports.creteToDo = async (req, res) => {
  try {
    const todo = new ToDo(req.body);
    const data = await todo.save();
    return res.status(200).json({ errors: false, data: data });
  } catch (error) {
    return res.status(400).json({ errors: true, message: error.message });
  }
};

exports.getAllToDo = async (req, res) => {
  try {
    const data = await ToDo.find();
    return res.status(200).json({ errors: false, data: data });
  } catch (error) {
    return res.status(400).json({ errors: true, message: error.message });
  }
};

exports.getToDoByID = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ToDo.findById(id);
    return res.status(200).json({ errors: false, data: data });
  } catch (error) {
    return res.status(400).json({ errors: true, message: error.message });
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ errors: false, data: data });
  } catch (error) {
    return res.status(400).json({ errors: true, message: error.message });
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ToDo.findByIdAndDelete(id);
    return res.status(200).json({ errors: false, data: data });
  } catch (error) {
    return res.status(400).json({ errors: true, message: error.message });
  }
};
