import { Strategy as LocalStrategy } from "passport-local";
import Admin from "../model/admin.js";
import passport from "passport";
import "dotenv/config";
import bcrypt from "bcrypt";

const customfields = {
  usernameField: "email",
  passwordField: "password",
};

export const verifyCallback = async (email, password, done) => {
  const badCredentials = "Invalid login credentials";
  try {
    const user = await Admin.findOne({ email: email })
      .select("email password")
      .exec();

    if (!user) {
      return done(badCredentials, false);
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return done(badCredentials, false);
    }
    return done(null, user);
  } catch (error) {
    done(error);
  }
};

const strategy = new LocalStrategy(customfields, verifyCallback, "local");

passport.use(strategy);
