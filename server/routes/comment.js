import { getCommentsFromPost, deleteComment, likeComment, createComment } from "../controllers/commendController.js"
import express from 'express'
import { verifyToken } from "../middlewares/auth.js"

const commentRouter = express.Router()

commentRouter.get('/:postId', getCommentsFromPost)

commentRouter.post('/create', verifyToken, createComment)

commentRouter.delete('/:commentId', verifyToken, deleteComment)

commentRouter.put('/like/:commentId',verifyToken, likeComment)

export default commentRouter