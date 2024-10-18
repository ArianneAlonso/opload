import { upload } from "../settings/upload.config.js";

export const uploadImg = (fieldName) => (req, res, next) => {
    const uploadSingle = upload.single(fieldName);

    uploadSingle(req, res, (err) => {
        if (err|| !req.file) {
            console.log(err);
            return res.status(500).json({ message: "error al subir imagen", });
        }
        req.body[fieldName] = req.file.filename;
        next();
    });
}