import "dotenv/config"
import app from "./app.js";

const PORT = 3333

app.listen(PORT, () => {
  console.log("Server run in port 3333!🔥");
});


