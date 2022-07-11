import cors from "cors";
import express from "express";
const app = express();
import { config } from "dotenv";
import mongoose from "mongoose";
import recipeRoutes from "./concepts/recipes/routes/recipeRoutes.js";
import categoriesRoutes from "./concepts/recipes/routes/categoriesRoutes.js";
import adminRoutes from "./concepts/recipes/routes/adminRoutes.js";
import multer from "multer";
import passport from "passport";
import path from "path";
import { dirname } from "path";
// import { fileURLToPath } from "url";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

config();

app.use(
  cors({
    // origin: "http://localhost:3001",
    credentials: true,
  })
);
app.options("*", cors());
let corsOptions = {
  origin: "https://fit-babeczka.herokuapp.com/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static("public")); //zeby za kazdym razem nie trzeba bylo calej sciezki podawa, tylko /img/image.jpg itp
app.get("/", cors(corsOptions), (req, res) => {
  res.send("Hello World!");
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const filefilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage, filefilter: filefilter });

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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
