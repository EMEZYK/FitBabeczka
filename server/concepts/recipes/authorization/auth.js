import jwt from "jsonwebtoken";
import "dotenv/config";
import passport from "passport";
import express from "express";

export const authenticationController = (req, res) => {
  const payload = {
    username: req.user.email, // te dane trafią do JWT
    expires: Date.now() + parseInt(36000),
  };
  const token = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY); //generuję token i w respons zwracam
  res
    .cookie("jwt", token, { httpOnly: true, secure: true })
    .status(200)
    .send("Authenticated succesfully, token in cookie"); //przypsuję jwt do cookie
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
