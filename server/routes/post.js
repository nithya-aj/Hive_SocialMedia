import { getPost, getUserPosts, createPost, updatePost, deletePost, getTimelinePosts, likePost, dislikePost, hidePost } from '../controllers/postController.js'
import express from 'express'
import { verifyToken } from '../middlewares/auth.js'

const postRouter = express.Router()

postRouter.get("/find/:id", getPost)
postRouter.get("/find/userPosts/:id", getUserPosts)
postRouter.get("/timeline", getTimelinePosts)

postRouter.post("/", verifyToken, createPost)

postRouter.put("/update/:id", verifyToken, updatePost)
postRouter.put("/like/:postId", verifyToken, likePost)
postRouter.put("/dislike/:postId", verifyToken, dislikePost)
postRouter.put("/:postId/hide",verifyToken, hidePost)

postRouter.delete("/delete/:id", verifyToken, deletePost)

export default postRouter