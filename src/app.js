import express from "express";
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

connectToDb();
const app = express();
routes(app)

export default app;
