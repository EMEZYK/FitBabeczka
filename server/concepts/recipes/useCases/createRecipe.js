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
      // image:
      // req.protocol +
      // "://" +
      // req.get("host") +
      // "/uploads/" +
      // req.file.filename,
      // fs.readFileSync(path.join(__dirname + "/uploads/" + file.filename)),
      time: body.time,
      difficultyLevel: body.difficultyLevel,
      servingsNumber: body.servingsNumber,
    });
    console.log(recipe);
    return recipe;
  } catch (err) {
    console.log(err.message);
    return new Error("Recipe wasn't created" + err.message);
  }
};

// Recipe.find({})
//   .then((recipes) => {
//     res.json(recipes);
//     const createdRecipe = await createRecipe();
//     return createdRecipe;
//   })
//   .catch((err) => console.log(err.message));
