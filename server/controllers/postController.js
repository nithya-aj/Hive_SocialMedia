import mongoose from "mongoose";
import User from "../models/User.js";
import Post from "../models/Post.js";
import Notification from "../models/Notifications.js";

// to fetch particular post
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById({
      _id: req.params.id
    })
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to fetch all the posts 
export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// to create a post
export const createPost = async (req, res) => {
  try {
    const isEmpty = Object.values(req.body).some((v) => v === "");
    if (isEmpty) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const createdPost = await Post.create({ ...req.body, userId: req.user.id });
    console.log(createdPost)
    return res.status(201).json(createdPost);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to update a post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.user.id) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json(updatedPost);
    } else {
      throw new Error("You are not authorized to update this post");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new Error("No such post");
    }
    if (post.userId === req.user.id) {
      await post.deleteOne();
      return res.status(200).json({
        msg: "Post deleted!",
      });
    } else {
      throw new Error("Only the owner of this post is allowed to do that");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to like and unlike a post
export const likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id;
    // find the post and check if it exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "No such post" });
    }
    // check if the current user is already liked or not
    const isLikedByCurrUser = post.likes.includes(userId);
    let updatedPost;
    if (isLikedByCurrUser) {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } },
        { new: true }
      );
      await User.findByIdAndUpdate(userId, { $pull: { likedPosts: postId } });
    } else {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { likes: userId } },
        { new: true }
      );
      await User.findByIdAndUpdate(userId, { $push: { likedPosts: postId } });
    }
    // manage notification 
    const notification = new Notification({
      senderId: userId,
      receiverId: post.userId,
      postId: postId,
      type: 'like',
    })
    await notification.save()
    return res.status(200).json({
      msg: isLikedByCurrUser ? "Post unliked!" : "Post liked🎉",
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to fetch timeline posts of user
export const getTimeLinePosts = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId })
      })
    )
    const timeLinePosts = userPosts.concat(...friendPosts).sort((a, b) => b.createdAt - a.createdAt)
    const allPosts = (await Post.find({}))
    const otherPosts = allPosts.filter(post => !timeLinePosts.some(data => post.id === data.id))
    const posts = [...timeLinePosts, ...otherPosts]
    return res.json(posts)
  } catch (error) {
    console.error('Error fetching timeline posts:', error)
    return res.status(500).json({ error: 'Error fetching timeline posts' })
  }
}

// to hide and unhide the post
export const togglePostHiddenStatus = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("No such post!");
    }
    if (post.userId !== userId) {
      throw new Error("You are not authorized to do this!");
    }
    const newHiddenStatus = !post.hidden;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { hidden: newHiddenStatus, hiddenAt: new Date() },
      { new: true }
    );
    const message = newHiddenStatus ? "Post hidden!" : "Post unhidden!";
    return res.status(200).json({ msg: message, post: updatedPost });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// to bookmark post and remove bookmark
export const bookmarkPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id;
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("No such post!");
    }
    const isbookmarkedByCurrUser = post.bookmarkedBy.includes(userId);
    let updatedPost;
    if (isbookmarkedByCurrUser) {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $pull: { bookmarkedBy: userId } },
        { new: true }
      );
      await User.findByIdAndUpdate(userId, { $pull: { bookmarks: postId } });
    } else {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { bookmarkedBy: userId } },
        { new: true }
      );
      await User.findByIdAndUpdate(userId, { $push: { bookmarks: postId } });
    }
    return res.status(200).json({
      msg: isbookmarkedByCurrUser ? "Removed bookmark!" : "Post bookmarked!",
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// fetching all the posts liked by user
export const getUserLikedPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate("likedPosts")
      .exec();
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }
    const likedPosts = user.likedPosts.filter((postId) =>
      mongoose.Types.ObjectId.isValid(postId)
    );
    if (!user.likedPosts || user.likedPosts.length === 0) {
      return res.status(404).json({ msg: "You liked no posts!" });
    }
    console.log(likedPosts);
    return res.status(200).json(likedPosts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// fetching all bookmarked posts
export const getAllBookmarkedPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate("bookmarks")
      .exec();
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }
    const bookmarkedPosts = user.bookmarks.filter((postId) =>
      mongoose.Types.ObjectId.isValid(postId)
    );
    if (!user.bookmarks || user.bookmarks.length === 0) {
      return res.status(404).json({ msg: "There are no bookmarks yet!" });
    }
    return res.status(200).json(bookmarkedPosts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};