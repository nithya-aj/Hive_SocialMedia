import { getPost, getUserPosts, createPost, updatePost, deletePost, getTimelinePosts, likePost, togglePostHiddenStatus, bookmarkPost, getUserLikedPosts, getAllBookmarkedPosts, getAllHiddenPosts } from '../controllers/postController.js'
import express from 'express'
import { verifyToken } from '../middlewares/auth.js'

const postRouter = express.Router()

postRouter.get("/find/:id", getPost)
postRouter.get("/find/user-posts/:id", getUserPosts)
postRouter.get("/timeline", verifyToken, getTimelinePosts)
postRouter.get("/users/:userId/liked-posts", getUserLikedPosts)
postRouter.get("/users/:userId/bookmarked-posts", getAllBookmarkedPosts)
postRouter.get("/find/hidden-posts/:id", getAllHiddenPosts)

postRouter.post("/", verifyToken, createPost)

postRouter.put("/update/:id", verifyToken, updatePost)
postRouter.put("/like/:postId", verifyToken, likePost)
postRouter.put("/hide-unhide/:postId", verifyToken, togglePostHiddenStatus)
postRouter.put("/bookmark/:postId", verifyToken, bookmarkPost)

postRouter.delete("/delete/:id", verifyToken, deletePost)

export default postRouter