import express from "express";
import Cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { productsrouter } from "./src/routes/routes.js";

const app = express();

app.use(helmet());
app.use(Cors()); 

app.use(morgan("dev")); //  registra las solicitudes en la consola


app.use(express.json()); // interpreta JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: false })); // interpreta datos URL-encoded

// archivos
app.use("/uploads", express.static(path.join(path.resolve(), "src", "uploads"))); 
//(/uploads) es el nombre de la ruta que en routes la ruta de http es la misma

// Rutas de la API
app.use("/product", productsrouter); //(productsrouter) sale de routes

// escucha del servidor
app.listen(4000, () => {
    console.log("server on port 4000");
});