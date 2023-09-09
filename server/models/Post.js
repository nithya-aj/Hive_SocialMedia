import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 30,
        max: 100
    },
    imageUrl: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        default: []
    },
    hidden: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("post", PostSchema)