import "dotenv/config";
const uri = process.env.MONGODB_URI;
import cors from "cors";
import express from "express";
const app = express();
import mongoose from "mongoose";
import recipeRoutes from "./concepts/recipes/routes/recipeRoutes.js";
import categoriesRoutes from "./concepts/recipes/routes/categoriesRoutes.js";
import adminRoutes from "./concepts/recipes/routes/adminRoutes.js";
import passport from "passport";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    credentials: true,
  })
);
app.options("*", cors());
let corsOptions = {
  origin: [
    "https://fit-babeczka.herokuapp.com/",
    "https://ec2-54-159-254-138.compute-1.amazonaws.com",
    "172.31.81.251",
  ],
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static("public"));
app.get("/", cors(corsOptions), (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected into MongoDB.."))
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.error(err));

app.use("/recipes", recipeRoutes);
app.use("/categories", categoriesRoutes);
app.use("/admin", adminRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
