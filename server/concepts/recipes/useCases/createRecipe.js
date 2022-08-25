import Recipe from "../model/recipes.js";
import { newRecipe } from "../repositories/commands.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const createNewRecipe = async (body) => {
  try {
    const recipe = await newRecipe({
      name: body.name,
      description: body.description,
      ingredients: body.ingredients,
      preparation: body.preparation,
      category: body.category,
      time: body.time,
      difficultyLevel: body.difficultyLevel,
      servingsNumber: body.servingsNumber,
    });
    return recipe;
  } catch (err) {
    return new Error("Recipe wasn't created" + err.message);
  }
};
