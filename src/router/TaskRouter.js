import express from "express";
import {
  createTask,
  deleteTaskById,
  readTasks,
  switchTask,
} from "../model/TaskModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const taskList = await readTasks();
  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "success",
          message: "unable to add the data",
        });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { _id, type } = req.body;

    //update data in db

    const result = await switchTask(_id, type);

    console.log(result);

    res.json({
      status: "success",
      message: "The task has been switched",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "The task has not been switched",
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await deleteTaskById(req.body);

    result?.deletedCount > 0
      ? res.json({
          status: "success",
          message: "  The tasks has been deleted succesfully",
        })
      : res.json({
          status: "error",
          message: "unable to delete the task",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "Error deleting the file",
    });
  }
});

export default router;
