import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/auth.js'
import postRouter from './routes/post.js'
import userRouter from './routes/user.js'
import commentRouter from './routes/comment.js'

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
app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/comment", commentRouter)

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))