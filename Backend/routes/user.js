const router = require("express").Router();
const { createUser } = require("../controllers/user");

const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.post("/user", createUser);

router.get("/users", getUsers);

router.get("/user/:id", getUser);

router.delete("user/:id", deleteUser);

router.put("user/:id", updateUser);

module.exports = router;
