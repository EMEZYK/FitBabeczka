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
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: true,
    },
    image: [
      {
        url: {
          type: String,
          required: true,
        },
        isMainPhoto: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
    time: {
      type: String,
      required: true,
    },
    difficultyLevel: {
      type: String,
      required: true,
    },
    servingsNumber: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
