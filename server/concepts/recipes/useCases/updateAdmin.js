import { hashPassword } from "./createAdmin.js";
import { updateUser } from "../repositories/commands.js";
import Admin from "../model/admin.js";

export const updateUserById = async (id, userData) => {
  const existingUser = await Admin.findById(id);

  if (!existingUser) {
    throw new Error("User doesn't exist");
  }
  if (userData.password) {
    if (userData.password !== userData.confirmPassword) {
      throw new Error("Password and confirmPassword must match");
    }
    const hashedPassword = await hashPassword(userData.password);
    const verifiedUser = {
      ...userData,
      password: hashedPassword,
    };

    return updateUser(id, verifiedUser);
  } else {
    return updateUser(id, userData);
  }
};
