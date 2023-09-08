import User from '../models/User.js'
import Post from '../models/Post.js'

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getUserPosts = async (req, res) => {

}

export const getTimelinePosts = async (req, res) => {

}

export const createPost = async (req, res) => {

}

export const updatePost = async (req, res) => {

}

export const likePost = async (req, res) => {

}

export const dislikePost = async (req, res) => {

}

export const deletePost = async (req, res) => {

}