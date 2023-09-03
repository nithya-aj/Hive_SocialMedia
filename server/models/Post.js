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
    }
}, { timestamps: true })

module.exports = mongoose.model("post", PostSchema)