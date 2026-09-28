import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task || task.trim() === "") {
      return res.status(400).json({
        message: "Task required",
      });
    }

    const createdTask = await Todo.create({ task });

    return res.status(201).json({
      message: "Todo created successfully",
      todo: createdTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create todo",
      error: error.message,
    });
  }
};
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    console.log("hitted");
    

    if (!task || task.trim() === "") {
      return res.status(400).json({
        message: "Task required",
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task },
      { new: true },
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update todo",
      error: error.message,
    });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      message: "Todo deleted successfully",
      todo: deletedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete todo",
      error: error.message,
    });
  }
};
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const todo = await Todo.findById(id);

      if (!todo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      return res.status(200).json({
        message: "Todo fetched successfully",
        data: todo,
      });
    }

    const todos = await Todo.find();

    return res.status(200).json({
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch todo",
      error: error.message,
    });
  }
};

