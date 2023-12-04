const getTaskService = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getMyTaskService = async (req, res) => {
  try {
    const { username } = req.params;
    const tasks = await TaskModel.find({ username });
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for you" });
    }

    return res.status(200).json({ tasks });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



const getTaskByUserService = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await TaskModel.find({ user: id });
        if (tasks.length === 0) {
        return res.status(404).json({ message: "No tasks found" });
        }
    
        return res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
    }

    // const createTaskService = (req, res) => {
    //     const {title, description, status = false, priority = "low", date} = req.body;
    //     const {username} = req.params;
    //     try {
    //         const newTask = new TaskModel({title, description, username, status, priority});
    //         newTask.save();
    //         return res.status(201).json({message: "Task created successfully", newTask});
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({message: "Internal server error"});
    //     }
    // }

    const createTaskService = async (req, res) => {
      const { title, description, status = false, priority = "low" } = req.body;
      const username = req.username;
      try {
        const newTaskToDB = new TaskModel({
          title,
          description,
          username,
          status,
          priority,
        });
        await newTaskToDB.save();
        return res.status(201).json({ message: "Task created successfully" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
    };
    
    const updateTaskService = async (req, res) => {
      const id = req.params.id;
      const username = req.username;
      const { title, description, status, priority } = req.body;
      try {
        const task = await TaskModel.findOneAndUpdate(
          { _id: id },
          { title, description, status, priority, username }
        );
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.status(200).json({ message: "Task updated successfully" });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
    };
    
    const deleteTaskService = async (req, res) => {
      const id = req.params.id;
      const username = req.username;
      try {
        const deleteTask = await TaskModel.deleteOne({ _id: id, username });
        if (deleteTask.deletedCount === 0)
          return res.status(404).json({ message: "Task not found" });
        return res.status(200).json({ message: "Task deleted successfully" });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
    };


module.exports = { getTaskService, getTaskByUserService, getMyTaskService, createTaskService, deleteTaskService};