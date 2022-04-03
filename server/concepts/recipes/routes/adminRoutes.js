import express from "express";
import passport from "passport";
import { createUser } from "../controllers/adminController.js";
import "../useCases/signInAdmin.js";
import { authenticationController } from "../authorization/auth.js";
import { signInUser } from "../controllers/adminController.js";
import { updateUser } from "../controllers/adminController.js";
const router = express.Router();

router.post("/signup", createUser);
router.post(
  "/login",
  signInUser,
  passport.authenticate("local", {
    session: false,
  }),
  authenticationController
);
router.put("/:id", updateUser);

export default router;
