import Recipe from "../model/recipes.js";

export const getAllRecipes = (req, res) => {
  Recipe.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const getRecipe = (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Recipe not found" }));
};

export const createRecipe = (req, res) => {
  Recipe.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

export const deleteRecipe = (req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Recipe not found" }));
};

// router.post("/search", searchRecipe);
// router.get("/categories", getCategories);
// router.get("/categories/:id", getCategoryById);
