import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";

import connectDB from "./db.js";

import api from "../routes/apiRoutes.js";

dotenv.config({ path: ".env" });

const port = process.env.PORT;
const allowedDomains = [process.env.FRONTEND_URL];

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1) {
      // El Origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/api", api);

app.get("/", (req, res) => {
  return res.redirect("/admin");
});

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
