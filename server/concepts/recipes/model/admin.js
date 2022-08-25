import mongoose from "mongoose";

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 25,
      unique: true,
      match: EMAIL_REGEX,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 30,
    },
  },
  {
    versionKey: false,
  }
);

const Admin = mongoose.model("Admin", userSchema);

export default Admin;
