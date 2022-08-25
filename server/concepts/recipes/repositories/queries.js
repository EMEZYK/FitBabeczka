import Recipe from "../model/recipes.js";
import mongoose from "mongoose";

export async function getRecipes(skip, limit, sort) {
  const recipes = await Recipe.aggregate([
    { $match: {} },
    {
      $sort: {
        dateCreated: -1,
      },
    },
    {
      $facet: {
        total: [{ $count: "createdAt" }],
        data: [
          {
            $addFields: {
              _id: "$_id",
            },
          },
        ],
      },
    },
    {
      $unwind: "$total",
    },

    {
      $project: {
        allRecipes: "$data",
        filteredData: {
          $slice: [
            "$data",
            skip,
            {
              $ifNull: [limit, "$total.createdAt"],
            },
          ],
        },

        pagination: {
          total: "$total.createdAt",
          limit: {
            $literal: limit,
          },
          page: {
            $literal: skip / limit,
          },
          pages: {
            $ceil: {
              $divide: ["$total.createdAt", limit],
            },
          },
        },
      },
    },
  ]);

  return recipes[0];
}
