import { Router } from 'express';
import { uploadImg } from '../middlewares/upload.middleware.js';

const router = Router();

//crear
router.post('/', uploadImg(), (req, res) => {
    console.log(req.body);

    res.status(201).json({
        msg: "imagen subida",
    });
})

export { Router };