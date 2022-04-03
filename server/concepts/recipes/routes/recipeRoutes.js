import express from "express";
import {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipe,
} from "../controllers/recipeController.js";
const router = express.Router();

router.get("/search/:key", searchRecipe);
router.get("/:id", getRecipe);
router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
