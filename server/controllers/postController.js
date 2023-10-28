import mongoose from "mongoose";
import User from "../models/User.js";
import Post from "../models/Post.js";

// to fetch posts of a particular user
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById({
            userId: req.params.id,
            hidden: false,
        }).sort({ createdAt: -1 });
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// to fetch all the posts which is not hidden
export const getUserPosts = async (req, res) => {
    try {
        const userPosts = await Post.find({
            userId: req.params.id,
            hidden: false,
        }).sort({ createdAt: -1 });
        return res.status(200).json(userPosts);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// to create a post
export const createPost = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some((v) => v === "");
        if (isEmpty) {
            throw new Error("All fields are required!");
        }

        await Post.create({ ...req.body, userId: req.user.id });
        const post = await Post.find({ userId: req.user.id }).sort({ createdAt: -1 });
        return res.status(201).json(post);
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
            console.log(updatedPost, 'updatedPost')
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
            return res.status(200).json({ msg: "Post deleted!" });
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
        return res.status(200).json({
            msg: isLikedByCurrUser ? "Post unliked!" : "Post liked🎉",
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// to fetch timeline posts of user
export const getTimelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        const userPosts = await Post.find({
            userId: currentUser._id,
            hidden: false,
        });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        const allPosts = userPosts
            .concat(...friendPosts)
            .sort((a, b) => b.createdAt - a.createdAt);
        return res.json(allPosts);
    } catch (error) {
        console.error("Error fetching timeline posts:", error);
        return res.status(500).json({ error: "Error fetching timeline posts" });
    }
};

// to hide and unhide the post
export const togglePostHiddenStatus = async (req, res) => {
    const postId = req.params.postId
    const userId = req.user.id
    try {
        const post = await Post.findById(postId)
        if (!post) {
            throw new Error("No such post!")
        }
        if (post.userId !== userId) {
            throw new Error("You are not authorized to do this!")
        }
        const newHiddenStatus = !post.hidden
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { hidden: newHiddenStatus },
            { new: true }
        )
        const message = newHiddenStatus ? "Post hidden!" : "Post unhidden!"
        return res.status(200).json({ msg: message, post: updatedPost })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

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
        return res
            .status(200)
            .json({
                msg: isbookmarkedByCurrUser ? "Removed bookmark!" : "Post bookmarked!",
                post: updatedPost,
            });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// fetching all hidden posts
export const getAllHiddenPosts = async (req, res) => {
    try {
        // check for valid input
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID." });
        }
        const userExists = await User.exists({ _id: req.params.id });
        if (!userExists) {
            return res.status(404).json({ message: "User not found." });
        }
        const hiddenPosts = await Post.find({
            userId: req.params.id,
            hidden: true,
        });
        return res.json(hiddenPosts);
    } catch (error) {
        console.error(error.message);
        return res
            .status(500)
            .json({ message: "An error occurred while fetching hidden posts." });
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
