import express from 'express'
import uploadRouter from "../controllers/uploadController.js"
import authRouter from "./auth.js"
import commentRouter from "./comment.js"
import postRouter from "./post.js"
import userRouter from "./user.js"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/post", postRouter)
router.use("/comment", commentRouter)
router.use("/upload", uploadRouter)

export default router