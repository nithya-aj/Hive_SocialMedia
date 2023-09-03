import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()

// db connect
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database connected!"))
.catch(error => console.error("Error connecting to the database:", error))

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))