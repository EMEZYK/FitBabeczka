import { response } from "express";
import Recipe from "../model/recipes.js";

export const getAllRecipes = async (req, res) => {
  Recipe.find({})
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const getRecipe = async (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Recipe not found" }));
};

export const createRecipe = async (req, res) => {
  Recipe.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const updateRecipe = async (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const deleteRecipe = async (req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.id })
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
  res.send(recipe);
};
