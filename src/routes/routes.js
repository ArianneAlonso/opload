import { Router } from 'express';
import { uploadImg } from '../middlewares/upload.middleware.js';

const router = Router();

//crear
productsrouter.post('/', uploadImg(), (req, res) => {
    console.log(req.body);

    res.status(201).json({
        Image: "http://localhost:4000/uploads/" + req.body.Image,
    });
})

export { productsrouter };
//esto se exporta en app.js

//impura, usar funcion de otra parent, hooks, pura, 