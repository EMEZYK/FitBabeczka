import express from "express";
import {
  getCategory,
  getAllCategories,
  createCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/:id", getCategory);
router.get("/", getAllCategories);

export default router;
