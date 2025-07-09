import express from "express";
import "dotenv/config";
import hr from "./routes/homeroutes.js";
import sr from "./routes/storeroutes.js";
import pr from "./routes/purchaseroutes.js";
import db from "./database/config.js"
import moment from 'moment'
const app = express();

const port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/jquery/dist'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", hr);
app.use("/store", sr);
app.use("/purchase", pr);
db.sequelize.authenticate()
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
