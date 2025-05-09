const taskModel = require('../models/taskModel');

class TaskController {
  // Get all tasks
  getAllTasks(req, res) {
    try {
      const tasks = taskModel.getAllTasks();
      return res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  // Get task by ID
  getTaskById(req, res) {
    try {
      const task = taskModel.getTaskById(req.params.id);
      
      if (!task) {
        return res.status(404).json({
          success: false,
          error: 'Task not found'
        });
      }
      
      return res.status(200).json({
        success: true,
        data: task
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  // Create a new task
  createTask(req, res) {
    try {
      const { title, description } = req.body;
      
      // Validation
      if (!title || !description) {
        return res.status(400).json({
          success: false,
          error: 'Please provide title and description for the task'
        });
      }
      
      const newTask = taskModel.createTask(req.body);
      
      return res.status(201).json({
        success: true,
        data: newTask
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  // Update a task
  updateTask(req, res) {
    try {
      // Check if task exists
      const taskExists = taskModel.getTaskById(req.params.id);
      
      if (!taskExists) {
        return res.status(404).json({
          success: false,
          error: 'Task not found'
        });
      }
      
      // Validation
      if (req.body.title === '' || req.body.description === '') {
        return res.status(400).json({
          success: false,
          error: 'Title and description cannot be empty'
        });
      }
      
      const updatedTask = taskModel.updateTask(req.params.id, req.body);
      
      return res.status(200).json({
        success: true,
        data: updatedTask
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  // Delete a task
  deleteTask(req, res) {
    try {
      // Check if task exists
      const taskExists = taskModel.getTaskById(req.params.id);
      
      if (!taskExists) {
        return res.status(404).json({
          success: false,
          error: 'Task not found'
        });
      }
      
      const result = taskModel.deleteTask(req.params.id);
      
      return res.status(200).json({
        success: true,
        message: 'Task deleted successfully'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

module.exports = new TaskController();
