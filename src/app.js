import express from "express";
import Cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { productsrouter } from "./routes/routes.js";

const app = express();

//midlewares
app.use(express.json());
app.use(Cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(path.resolve(), "src", "uploads")));

app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.resolve(), "src", "uploads"));

//routes
app.use("/product", productsrouter);

//escucha

app.listen(4000, () => {
    console.log("server on port 4000");
});