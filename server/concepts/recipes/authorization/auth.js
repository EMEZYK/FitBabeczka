import jwt from "jsonwebtoken";
import "dotenv/config";
const secretKey = process.env.SECRET_KEY;
import passport from "passport";
import express from "express";

export const authenticationController = (req, res) => {
  const payload = {
    username: req.user.email,
    userid: req.user._id,
    expires: Date.now() + parseInt(36000),
  };

  const token = jwt.sign(JSON.stringify(payload), secretKey);
  res
    .cookie("jwt", token, { httpOnly: true, secure: true })
    .status(200)
    .send({ token: token });
};

const verifyToken = (token) => {
  if (!token) {
    return false;
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    return true;
  } catch (err) {
    return false;
  }
};

export const isAuthenticated = (req, res, next) => {
  const token = req.headers.token;
  const check = verifyToken(token);
  if (!check) {
    return res.status(401).send("You are not authenticated");
  }
};
