const uuid = require("uuid");

const task = require("../model/task");
const Task = require("../model/task");

let tasks = [];

exports.createTask = (req, res) => {
  const { title, description, duedate, asignee, currentstate } = req.body;
  const newTask = new Task({
    title,
    description,
    duedate,
    asignee,
    currentstate,
  });

  newTask.save((err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(newTask);
    }
  });
};

exports.getTasks = (req, res) => {
  res.send(tasks);
};

exports.deleteTask = (req, res) => {
  tasks = tasks.filter((user) => task.id !== req.params.id);
  res.send("Task deleted successfully");
};

exports.updateTask = (req, res) => {
  const task = tasks.find((user) => task.id === req.params.id);
  task.title = req.body.title;
  user.description = req.body.description;

  res.send("Task Updated Successfully");
};
