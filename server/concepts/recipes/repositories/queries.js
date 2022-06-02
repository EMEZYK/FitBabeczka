import Recipe from "../model/recipes.js";
import mongoose from "mongoose";

export async function getRecipes(skip, limit, sort) {
  // export async function getAllRecipes(options, skip, limit, sort) {
  // const recipes = await Recipe.find(options).skip(skip).limit(limit).sort(sort);

  const recipes = await Recipe.aggregate([
    { $match: {} },

    {
      $facet: {
        data: [{ $match: {} }, { $skip: skip }, { $limit: limit }],
        total: [
          { $sort: { dateCreated: -1 } },
          {
            $group: {
              count: { $sum: 1 },
              _id: null,
            },
          },
        ],
        // allData: [{ $match: {} }],
      },
    },
  ]);

  return recipes[0];
}
