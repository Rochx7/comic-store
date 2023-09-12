import express from "express";
import connectToDb from "./config/dbConnect.js";
import comics from "./models/Comics.js";

connectToDb();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("É uai");
});

app.get("/comics", async (req, res) => {
    const comicsList = await comics.find({});
    res.status(200).json(comicsList);
});

export default app;
