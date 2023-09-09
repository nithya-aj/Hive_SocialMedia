import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const getAll = async (req, res) => {
    try {
        const users = User.find({}).select("-password")
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getUser = async (req, res) => {
    try {

        const user = await User.findById(req.params.id)
        if (!user) {
            throw new Error("User does not exist")
        }
        const { password, ...others } = user._doc
        return res.status(200).json(others)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const updateUser = async (req, res) => {
    if (req.params.id === req.user.id) {
        try {
            if (req.body.password) {
                const newHashedPassword = await bcrypt.hash(req.body.password, 10)
                req.body.password = newHashedPassword
            }
            const user = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json({ msg: "Only the owner is allowed to do that" })
    }
}

export const deleteUser = async (req, res) => {
    if (req.params.id === req.user.id) {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                throw new Error("User does not exist!")
            }
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({ msg: "User deleted!" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        res.status(403).send('Only the owner is allowed to do that')
    }
}

export const getUserFriends = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const followUser = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const unfollowUser = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(error.message)
    }
}