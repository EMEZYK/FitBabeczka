import { signUpUser } from "../useCases/createAdmin.js";
import { authenticationController } from "../authorization/auth.js";
import { verifyCallback } from "../useCases/signInAdmin.js";

export const createUser = async (req, res) => {
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
