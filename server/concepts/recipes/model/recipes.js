import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    preparation: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Ciasta", "Ciastka", "Desery", "Muffinki", "Babeczki"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
