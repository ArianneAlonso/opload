import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

//storage
const storage = multer.diskStorage({
    destination: (_req, _file, cb) =>{
        cb(null, "src/uploads/");
    },
    filename: (_req, _file, cb)=>{
        cb(null, crypto.randomUUID().toString()+ path.extname(file.originalname));
    },});
//limits

//filters
