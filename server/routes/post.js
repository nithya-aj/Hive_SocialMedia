import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getTimeLinePosts,
  likePost,
  togglePostHiddenStatus,
  bookmarkPost,
  getUserLikedPosts,
  getAllBookmarkedPosts,
  getAllPosts,
} from "../controllers/postController.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/find/:id", getPost);
postRouter.get("/find", verifyToken, getTimeLinePosts);
postRouter.get("/:userId/liked-posts", verifyToken, getUserLikedPosts);
postRouter.get("/:userId/bookmarked-posts", verifyToken, getAllBookmarkedPosts);

postRouter.post("/create", verifyToken, createPost);

postRouter.put("/update/:id", verifyToken, updatePost);
postRouter.put("/like/:postId", verifyToken, likePost);
postRouter.put("/hide-unhide/:postId", verifyToken, togglePostHiddenStatus);
postRouter.put("/bookmark/:postId", verifyToken, bookmarkPost);

postRouter.delete("/:id/delete", verifyToken, deletePost);

export default postRouter;
