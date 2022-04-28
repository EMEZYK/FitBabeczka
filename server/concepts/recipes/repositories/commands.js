import Admin from "../model/admin.js";
import Category from "../model/category.js";

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
