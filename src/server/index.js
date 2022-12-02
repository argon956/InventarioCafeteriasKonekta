import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";

import connectDB from "./db.js";

import api from "../routes/apiRoutes.js";

dotenv.config({ path: ".env" });

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/api", api);

app.get("/", (req, res) => {
  return res.redirect("/admin");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at: localhost:${port}`);
});

app.use((err, req, res, next) => {
  res.locals.siteName = "Inventario Cafeterias Konecta";
  res.locals.siteNameShort = "InventarioCafeteriasKonecta";
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
  return next();
});
