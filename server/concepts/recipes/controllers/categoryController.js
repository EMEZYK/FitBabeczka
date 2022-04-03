import Category from "../model/category.js";

export const createCategory = (req, res) => {
  Category.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const getCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Category not found" }));
};

export const getAllCategories = (req, res) => {
  Category.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const deleteCategory = (req, res) => {
  Category.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Category not found" }));
};
