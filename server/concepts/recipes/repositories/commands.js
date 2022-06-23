import Admin from "../model/admin.js";
import Category from "../model/category.js";
import Recipe from "../model/recipes.js";

export const createUser = async (data) => {
  const newUser = new Admin({
    ...data,
  });

  try {
    const savedUser = await newUser.save();
    return {
      name: savedUser.name,
      email: savedUser.email,
      _id: savedUser.id,
    };
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      throw new Error("Email must be unique");
    } else {
      console.log("inny error");
    }
  }
};

export const updateUser = async (id, data) => {
  return await Admin.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });
};

export const updateCategory = async (filter, data) => {
  return await Category.updateOne(filter, data);
};

export const newRecipe = async (data) => {
  const newRecipe = new Recipe({
    ...data,
  });
  try {
    return await newRecipe.save();
  } catch (err) {
    console.log(err.message);
    return new Error("Recipe wasn't created");
  }
};

//   try {
//     const savedRecipe = await newRecipe.save();
//     return {
//       name: savedRecipe.name,
//       description: savedRecipe.description,
//       ingredients: savedRecipe.ingredients,
//       preparation: savedRecipe.preparation,
//       category: savedRecipe.category,
//       image:
//         req.protocol +
//         "://" +
//         req.get("host") +
//         "/uploads/" +
//         req.file.filename,
//       time: savedRecipe.time,
//       difficultyLevel: savedRecipe.difficultyLevel,
//       servingsNumber: savedRecipe.servingsNumber,
//     };
//   } catch (err) {
//     return new Error("Recipe wasn't created");
//   }
// };
