import { getCommentsFromPost, deleteComment, likeComment, createComment } from "../controllers/commandController.js"
import express from 'express'
import { verifyToken } from "../middlewares/auth.js"

const commentRouter = express.Router()

commentRouter.get('/:postId', getCommentsFromPost)

commentRouter.post('/', verifyToken, createComment)

commentRouter.delete('/:commentId', verifyToken, deleteComment)

commentRouter.put('/like/:commentId',verifyToken, likeComment)

export default commentRouter