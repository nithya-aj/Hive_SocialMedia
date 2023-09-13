import User from '../models/User.js'
import Post from '../models/Post.js'
import bcrypt from 'bcrypt'

// fetching all registered users
export const getAll = async (req, res) => {
    try {
        const users = await User.find({}).select("-password")
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
// get a particular user
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
// update a user
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
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json({ msg: "Only the owner is allowed to do that" })
    }
}
// delete user
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
// fetching user following profiles
export const getUserFriends = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            throw new Error("User does not exist!")
        }
        const userFriends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId).select("-password")
            })
        )
        return res.status(200).json(userFriends)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
// follow user
export const followUser = async (req, res) => {
    if (req.params.id !== req.user.id) {
        try {
            const friend = await User.findById(req.params.id)
            if (!friend) {
                throw new Error("User not found with the provided ID")
            }

            if (friend.followers.includes(req.user.id)) {
                throw new Error("Duplicate User Follow: You are attempting to follow a user you have already followed.")
            }

            await User.findByIdAndUpdate(
                req.params.id,
                { $push: { followers: req.user.id } }
            )

            await User.findByIdAndUpdate(
                req.user.id,
                { $push: { followings: req.params.id } }
            )
            return res.status(200).json({ msg: "User followed!" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(500).json({ msg: "You cannot follow yourself." })
    }
}
// unfollow user
export const unfollowUser = async (req, res) => {
    if (req.params.id !== req.user.id) {
        try {
            const friend = await User.findById(req.params.id)
            if (!friend) {
                throw new Error("User not found with the provided ID")
            }

            if (!friend.followers.includes(req.user.id)) {
                throw new Error("You cannot unfollow a user you are not currently following")
            }

            await User.findByIdAndUpdate(
                req.params.id,
                { $pull: { followers: req.user.id } }
            )

            await User.findByIdAndUpdate(
                req.user.id,
                { $pull: { followings: req.params.id } }
            )
            return res.status(200).json({ msg: "User unfollowed!" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(500).json({ msg: "You cannot follow or unfollow yourself." })
    }
}

// fetching all the bookmarked posts
export const getBookmarkedPosts = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('bookmarks');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const bookmarkedPosts = user.bookmarksfilter(postId => mongoose.Types.ObjectId.isValid(postId));
        return res.status(200).json(bookmarkedPosts);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error.message)
    }
}