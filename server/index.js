import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path";
import bodyParser from "body-parser";
import router from './routes/index.js'
import dbConnection from './dbConfig/index.js';

const __dirname = path.resolve(path.dirname(""));
dotenv.config()
const app = express();

app.use(express.static(path.join(__dirname, "views/build")));

const PORT = process.env.PORT || 8800;

// db connect
dbConnection()

app.use('/images', express.static('public/images'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))