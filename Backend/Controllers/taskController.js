const Task = require("../models/Task");

//creation task
const createTask = async (req, res) => {
  try {
    const { title, descriptions, status } = req.body;
    if (!title || !descriptions || !status) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const taskData = await Task.create({
      title: title,
      descriptions: descriptions,
      status: status,
    });
    return res.status(200).json({
      success: true,
      data: taskData,
      message: "Task has created Successfully",
    });
  } catch (error) {
    console.log("Error message : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message + "Validation occured",
    });
  }
};

//read task

const readTask = async (req, res) => {
  try {
    const taskData = await Task.find({});
    if (!taskData) {
      return res.status(504).json({
        success: false,
        message: "Some Error Occured",
      });
    }
    return res.status(200).json({
      success: true,
      data: taskData,
      message: "Task Data fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//read particuler data
const readParticularTask = async (req, res) => {
  try {
    const id = req.params.id;
    const particularTask = await Task.findById({ _id: id });
    if (!particularTask) {
      return res.status(504).json({
        success: false,
        message: "Some Error Occured",
      });
    }
    return res.status(200).json({
      success: true,
      data: particularTask,
      message: "Task Data fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update task

const updatedTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedtask = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      data: updatedtask,
      message: "Task Data Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete the task

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      data: task,
      message: "Task Data deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  readTask,
  readParticularTask,
  updatedTask,
  deleteTask,
};
