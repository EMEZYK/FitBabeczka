import express from "express";
import {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipe,
} from "../controllers/recipeController.js";
import { upload } from "../useCases/upload.js";
const router = express.Router();

router.get("/", getAllRecipes);
router.get("/search/:key", searchRecipe);
router.get("/:id", getRecipe);
router.post("/", upload.single("photo"), createRecipe);
router.put("/:id", upload.single("photo"), updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
