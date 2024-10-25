import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

//storage
const storage = multer.diskStorage({
    destination: (_req, _file, cb) =>{
        cb(null, "src/uploads/");//la carpeta donde se guardan las imagenes
    },
    filename: (_req, file, cb)=>{
        cb(null, crypto.randomUUID().toString()+ path.extname(file.originalname));
    },});
//limits
const maxmb = 20;
const limits = { fileSize: 1024 * 1024 * maxmb };
//filters
const fileFilter = (_req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const allowext =fileTypes.test(path.extname(file.originalname));

    if(!allowext){
        return cb(new Error("solo se permiten imagenes formatos jpeg, jpg, png, gif, webp"));
    }
    return cb(null, true);
};

export const upload = multer({ storage, limits, fileFilter }); //se exporta en upload.middleware
