import express from "express";

import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodo);
router.get("/todos/:id", getTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
