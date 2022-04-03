import express from "express";
import {
  getCategory,
  getAllCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/:id", getCategory);
router.get("/", getAllCategories);
router.delete("/:id", deleteCategory);

export default router;
