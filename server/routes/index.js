import express from 'express'
import uploadRouter from "../controllers/uploadController.js"
import authRouter from "./auth.js"
import commentRouter from "./comment.js"
import postRouter from "./post.js"
import userRouter from "./user.js"
import notificationRouter from './Notification.js'

const router = express.Router()

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/post", postRouter)
router.use("/comment", commentRouter)
router.use("/upload", uploadRouter)
router.use("/notification", notificationRouter)

export default router