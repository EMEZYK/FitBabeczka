import Category from "../model/category.js";
import { updateCategory } from "../repositories/commands.js";

export const updateCategoryFunc = async (categoryId, data) => {
  const existingCategory = await Category.findById(categoryId);
  if (!existingCategory) {
    throw new Error("Category doesn't exists");
  }
  return await updateCategory({ _id: categoryId }, data);
};
