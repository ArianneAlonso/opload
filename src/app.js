import express from "express";
import Cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { Router } from "./routes/routes.js";

const app = express();

//midlewares
app.use(express.json());
app.use(Cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", Router);

//escucha

app.listen(4000, () => {
    console.log("server on port 4000");
});