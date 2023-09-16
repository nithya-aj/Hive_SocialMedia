import Comment from '../models/Comment.js'

// fetching comments from particular posts
export const getCommentsFromPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId })
        return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// creating comments
export const createComment = async (req, res) => {
    try {
        const createdComment = await Comment.create({ ...req.body, userId: req.user.id })
        res.status(201).json(createdComment)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// delete comment
export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)
        if (comment.userId === req.user.id) {
            await comment.deleteOne()
            return res.status(200).json({ msg: "Comment deleted!" })
        } else {
            return res.send('You are not authorized to perform this action')
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// like and dislike comment
export const likeComment = async (req, res) => {
    try {
        const currentUserId = req.user.id
        const comment = await Comment.findById(req.params.commentId)
        if (!comment.likes.includes(currentUserId)) {
            comment.likes.push(currentUserId)
            await comment.save()
            return res.status(200).json({ msg: "Comment liked!" })
        } else {
            comment.likes = comment.likes.filter((id) => id !== currentUserId)
            await comment.save()
            return res.status(200).json({ msg: "Comment unliked!" })
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}