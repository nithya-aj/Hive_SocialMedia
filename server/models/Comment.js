import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        default: []
    }
}, { timestamps: true })

export default mongoose.model("Comment", CommentSchema)
