import Category from "../model/category.js";
import { updateCategoryFunc } from "../useCases/updateCategory.js";

export const createCategory = (req, res) => {
  Category.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const getCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Category not found" }));
};

export const getAllCategories = (req, res) => {
  Category.find({})
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

export const deleteCategory = (req, res) => {
  Category.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ msg: "Category not found" }));
};

export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await updateCategoryFunc(req.params.id, req.body);
    if (!updatedCategory) {
      return res.status(404).send("There is no category");
    }
    return res.status(200).send({
      message: "Category was updated",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
  next();
};
