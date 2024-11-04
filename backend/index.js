import cors from "cors";
import "dotenv/config";
import express from "express";

import router from "./routes/usersRoute.js";
import { tracker } from "./middleware/reportRequest.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(tracker);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor encendido en el puerto http://localhost:${PORT}`);
});