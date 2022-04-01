import cors from "cors";
import express from "express";
const app = express();
import { config } from "dotenv";
import mongoose from "mongoose";
import recipeRoutes from "./concepts/recipes/routes/recipeRoutes.js";
import categoriesRoutes from "./concepts/recipes/routes/categoriesRoutes.js";
import adminRoutes from "./concepts/recipes/routes/adminRoutes.js";
import passport from "passport";

config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static("public")); //zeby za kazdym razem nie trzeba bylo calej sciezki podawa, tylko /img/image.jpg itp
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected into MongoDB.."))
  .then((result) => app.listen(process.env.SERVER_PORT || 3000))
  .catch((err) => console.error(err));

app.use("/recipes", recipeRoutes);
app.use("/categories", categoriesRoutes);
app.use("/admin", adminRoutes);
