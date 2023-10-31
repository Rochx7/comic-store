import express from "express";
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handlerErrors from "./middlewares/handlerErrors.js";
import handler404 from "./middlewares/handler404.js";

connectToDb();
const app = express();
routes(app)

app.use(handler404)

app.use(handlerErrors)

export default app;
