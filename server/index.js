import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/auth.js'

const app = express()
dotenv.config()

// db connect
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected!"))
    .catch(error => console.error("Error connecting to the database", error))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/auth", authRouter)

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))