import { response } from "express";
import Recipe from "../model/recipes.js";
import { getRecipes } from "../repositories/queries.js";

export const getAllRecipes = async (req, res) => {
  try {
    const limitValue = parseInt(req.query.limit);

    const page = parseInt(req.query.page || 1);
    const skipValue = page * limitValue;
    const recipes = await getRecipes(skipValue, limitValue);

    return res.status(200).send(recipes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export const getRecipe = async (req, res) => {
  Recipe.findById({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Recipe not found" }));
};

export const createRecipe = async (req, res) => {
  Recipe.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const updateRecipe = async (req, res) => {
  Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const deleteRecipe = async (req, res) => {
  Recipe.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const searchRecipe = async (req, res) => {
  let recipe = await Recipe.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } }, //w nazwie ; key = szukane słowo
      { description: { $regex: req.params.key, $options: "i" } }, //w opisie
      { ingredients: { $regex: req.params.key, $options: "i" } }, //szukam w składnikach
    ], //$or oznacza, ze mozemy tez wielu fieldow szukac
  });
  // .sort(req.query.sort);
  // .limit(req.query.limit);
  // console.log(recipe);

  res.send(recipe);
};
