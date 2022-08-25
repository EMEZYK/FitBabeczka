import Recipe from "../model/recipes.js";
import { getRecipes } from "../repositories/queries.js";
import validateRecipe from "../model/recipesValidation.js";
import { newRecipe } from "../repositories/commands.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const getAllRecipes = async (req, res) => {
  try {
    const limitValue = parseInt(req.query.limit);

    const page = parseInt(req.query.page || 0);
    const skipValue = page * limitValue;
    const recipes = await getRecipes(skipValue, limitValue);

    return res.status(200).send(recipes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getRecipe = async (req, res) => {
  Recipe.findById({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Recipe not found" }));
};

export const createRecipe = async (req, res) => {
  let body = req.body;

  body.ingredients = JSON.parse(body.ingredients);

  const { error } = validateRecipe(body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const recipe = await newRecipe({
      name: body.name,
      description: body.description,
      ingredients: body.ingredients,
      preparation: body.preparation,
      category: body.category,
      image:
        req.protocol +
        "://" +
        req.get("host") +
        "/uploads/" +
        req.file.filename,
      time: req.body.time,
      difficultyLevel: req.body.difficultyLevel,
      servingsNumber: req.body.servingsNumber,
    });
    recipe
      .save()
      .then((savedRecipe) => {
        res.json(savedRecipe);
      })
      .catch((err) => {
        res.status(500).send(error.message);
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateRecipe = async (req, res) => {
  const body = req.body;

  if (body.ingredients) {
    body.ingredients = JSON.parse(body.ingredients);
  }

  if (req.file?.filename) {
    body.image =
      req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
  }

  Recipe.findByIdAndUpdate({ _id: req.params.id }, body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      res.status(200).json(result);
    })

    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const deleteRecipe = async (req, res) => {
  Recipe.findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      const image = result.image;
      const startIndex = image.indexOf("/uploads");

      const imagePath = "." + image.substr(startIndex);

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      res.status(200).json(result);
    })
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const searchRecipe = async (req, res) => {
  let recipe = await Recipe.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
      { description: { $regex: req.params.key, $options: "i" } },
      { ingredients: { $regex: req.params.key, $options: "i" } },
    ],
  });

  res.send(recipe);
};
