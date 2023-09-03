import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    place: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: Number,
        default: ''
    },
    profilePic: {
        type: String,
        default: ''
    },
    coverPic: {
        type: String,
        default: ''
    },
    followers: {
        type: [String],
        default: []
    },
    following: {
        type: [String],
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)