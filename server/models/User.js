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
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: '',
        min: 2,
        max: 50
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
    followings: {
        type: [String],
        default: []
    }
}, { timestamps: true })

export default mongoose.model("user", UserSchema)