import express from "express";
import cors from "cors";
import mongoose from "./db/db.js";
import routes from "./routes/index.js";

const app = express();
// to connect middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public")); 
//for file uploading create folder public
app.use(routes);

app.listen(4000, () => {
  console.log("App is running @ http://localhost :4000/");
});
