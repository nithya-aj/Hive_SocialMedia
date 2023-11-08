import {
  getPost,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  getPosts,
  likePost,
  togglePostHiddenStatus,
  bookmarkPost,
  getUserLikedPosts,
  getAllBookmarkedPosts,
  getAllHiddenPosts,
} from "../controllers/postController.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.get("/", verifyToken, getPosts);
postRouter.get("/find/:id", getPost);
postRouter.get("/find/:id/posts", getUserPosts);
postRouter.get("/users/:userId/liked-posts", getUserLikedPosts);
postRouter.get("/users/:userId/bookmarked-posts", getAllBookmarkedPosts);
postRouter.get("/find/hidden-posts/:id", getAllHiddenPosts);

postRouter.post("/create", verifyToken, createPost);

postRouter.put("/update/:id", verifyToken, updatePost);
postRouter.put("/like/:postId", verifyToken, likePost);
postRouter.put("/hide-unhide/:postId", verifyToken, togglePostHiddenStatus);
postRouter.put("/bookmark/:postId", verifyToken, bookmarkPost);

postRouter.delete("/:id/delete", verifyToken, deletePost);

export default postRouter;
