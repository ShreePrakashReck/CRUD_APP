const {
  createTask,
  readTask,
  readParticularTask,
  updatedTask,
  deleteTask,
} = require("../Controllers/taskController");

const router = require("express").Router();

router.post("/createTask", createTask);

router.get("/readAlltask", readTask);

router.get("/read/:id", readParticularTask);

router.put("/updatetask/:id", updatedTask);

router.delete("/deletetask/:id", deleteTask);

module.exports = router;
