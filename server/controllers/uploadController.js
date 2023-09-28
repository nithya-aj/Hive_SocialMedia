import multer from 'multer'
import express from "express"
import { v4 as uuidv4 } from 'uuid';

const uploadRouter = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const filename = uuidv4() + '-' + file.originalname;
        cb(null, filename)
    }
})

const upload = multer({ storage: storage });

uploadRouter.post('/', upload.single('photo'), (req, res) => {
    console.log(req.file, 'req.file----------'); // Use req.file to access the uploaded file
    try {
        return res.status(201).json({ msg: 'Image uploaded!' });
    } catch (error) {
        return res.status(500).json(error);
    }
});

export default uploadRouter