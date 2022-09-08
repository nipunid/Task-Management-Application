const router = require("express").Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.post("/task", createTask);

router.get("/tasks", getTasks);

router.put("/task/:id", updateTask);

router.delete("/task/:id", deleteTask);

module.exports = router;

/**
 *
 * GET /api/users - get all users. IF there are 10000 users, we shouldn't return all 10000 at once.
 * GET /api/users/1 - get whose id is 1
 *
 * POST /api/users - create a user with the content sent and returned the created user
 *
 * DELETE /api/users/1 - delete the user with id 1
 *
 * PUT /api/users/1 - replace the content of user 1 with the new content.
 *
 */
