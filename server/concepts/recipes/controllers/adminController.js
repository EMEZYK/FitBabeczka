import { signUpUser } from "../useCases/createAdmin.js";
import { authenticationController } from "../authorization/auth.js";
import { verifyCallback } from "../useCases/signInAdmin.js";
import validateCreateUser from "../model/adminValidation.js";
import { updateUserById } from "../useCases/updateAdmin.js";

export const createUser = async (req, res) => {
  const { error } = validateCreateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const user = await signUpUser(req.body);
    return res.status(200).send({
      message: "User was added",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const signInUser = async (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).send("Need email and password");
  }
  next();
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).send("There is no user");
    }
    return res.status(200).send({
      message: "User was updated",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
  next();
};
