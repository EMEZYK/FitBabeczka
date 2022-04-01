import Admin from "../model/admin.js";

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
      console.log(err);
    }
  }
};
