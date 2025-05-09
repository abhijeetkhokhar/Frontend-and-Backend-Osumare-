// In-memory storage for tasks
let tasks = [];
let nextId = 1;

class TaskModel {
  // Get all tasks
  getAllTasks() {
    return tasks;
  }

  // Get task by ID
  getTaskById(id) {
    return tasks.find(task => task.id === parseInt(id));
  }

  // Create a new task
  createTask(taskData) {
    const newTask = {
      id: nextId++,
      title: taskData.title,
      description: taskData.description,
      completed: taskData.completed || false,
      createdAt: new Date()
    };
    
    tasks.push(newTask);
    return newTask;
  }

  // Update a task
  updateTask(id, taskData) {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    
    if (taskIndex === -1) {
      return null;
    }
    
    const updatedTask = {
      ...tasks[taskIndex],
      ...taskData,
      updatedAt: new Date()
    };
    
    tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  // Delete a task
  deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    
    if (taskIndex === -1) {
      return false;
    }
    
    tasks.splice(taskIndex, 1);
    return true;
  }
}

module.exports = new TaskModel();
