const uuid = require("uuid");

const user = require("../model/user");

let users = [];

exports.createUser = (req, res) => {
  const { name, email, password, position } = req.body;
  // users.push({...user, id: uuid()});
  const newUser = new user({
    name,
    email,
    password,
    position,
  });
  newUser.save((err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(newUser);
    }
  });
  res.send(newUser);
};

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

exports.deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User deleted successfully");
};

exports.updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;

  res.send("User Updated Successfully");
};
