import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from './routes/index.js'
import dbConnection from './dbConfig/index.js';

const __dirname = path.resolve(path.dirname(""));
dotenv.config()
const app = express();

app.use(express.static(path.join(__dirname, "views/build")));

// db connect
dbConnection()

app.use('/images', express.static('public/images'))
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router)

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))