import Admin from "../model/admin.js";
import bcrypt from "bcrypt";
import passport from "passport";
import localStrategy from "passport-local";
import { createUser } from "../repositories/commands.js";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const signUpUser = async (body) => {
  let user = await Admin.findOne({ email: body.email });
  if (user) {
    throw new Error("User already exists");
  } else {
    const hashedPassword = await hashPassword(body.password);
    const verifiedUser = {
      ...body,
      password: hashedPassword,
    };
    const createdUser = await createUser(verifiedUser);
    return createdUser;
  }
};
